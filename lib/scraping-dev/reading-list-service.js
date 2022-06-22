const {URLs} = require("../constants");

const readingListObject = {
	url: URLs.DEV.READING_LIST,
	async scraper(page){
		console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url, { waitUntil: 'networkidle0', timeout: 0 });
        await page.evaluate(async () => {
            await new Promise((resolve, reject) => {
              const interval = setInterval(() => {
                const button = document.querySelector('#main-content > section > div > button.c-btn');
                if (button !== null) {
                  button.click();
                } else {
                  clearInterval(interval);
                  resolve();
                }
              }, 300);
            });
        });
        //to load data.
        console.log('load')
        await page.waitForTimeout(100);
        let readingList = await page.evaluate((baseUrl) => {
            const rowNodeList = document.querySelectorAll('#main-content > section > article');
            const rowArray = Array.from(rowNodeList);
            return rowArray.map(panel => {
                const title = panel.querySelector("h2").textContent;
                const url = `${baseUrl}${panel.querySelector('div > a.crayons-link').getAttribute('href')}`;
                let tags = [];
                let aTags = panel.querySelectorAll('div > p.fs-s > span > a.crayons-tag');
                aTags.forEach((item) => {
                    tags.push({name:item.innerText.replace(/#/gi, '')});//name object need in notion propertity multi-select
                });
                // const button = panel.querySelector('#main-content > section > article > div > button.c-btn');
                // if (button !== null) {
                //   button.click();
                // }
                return {
                    title,
                    url,
                    tags
                }
            });
        }, URLs.DEV.BASE);

		console.log('readingList ------->'+readingList.length);
		console.log(`🎊 🎊 dev.to reading list. 🎊 🎊`);
		return readingList;

	}
}

module.exports = readingListObject;