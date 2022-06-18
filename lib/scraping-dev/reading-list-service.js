const {URLs} = require("../constants");

const readingListObject = {
	url: URLs.DEV.READING_LIST,
	async scraper(page){
		console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url, { waitUntil: 'networkidle0', timeout: 0 });
        let list = await page.evaluate((baseUrl) => {
            const rowNodeList = document.querySelectorAll('#main-content > section > article');
            const rowArray = Array.from(rowNodeList);
            return rowArray.map(panel => {
                const title = panel.querySelector("h2").textContent;
                const url = `${baseUrl}${panel.querySelector('div > a.crayons-link').getAttribute('href')}`;
                let tags = [];
                let aTags = panel.querySelectorAll('div > p.fs-s > span > a.crayons-tag');
                aTags.forEach((item) => {
                    tags.push(item.innerText.replace(/#/gi, ''));
                });
                return {
                    title,
                    url,
                    tags
                }
            });
        }, URLs.DEV.BASE);
        console.log(JSON.stringify(list));

		// const heading1 = await page.$eval("#main-content > section > article", el => el.textContent);
        // console.log(heading1)
		
		console.log(`🎊 🎊 dev.to reading list. 🎊 🎊`);
		return page;

	}
}

module.exports = readingListObject;