const {URLs, CREDS} = require("../constants");

const loginObject = {
	url: URLs.DEV.LOGIN,
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url, { waitUntil: 'networkidle0' });
		await page.waitForSelector('#page-content');
		await page.goto(this.url, );
		await page.type('#user_email', CREDS.DEV.EMAIL);
		await page.type('#user_password', CREDS.DEV.PASSWORD);

		await page.evaluate(() => {
            document.querySelector('input[type=submit]').click();
        });
		console.log(`🎊 🎊 dev.to login success 🎊 🎊`);
		return page;
	}
}

module.exports = loginObject;