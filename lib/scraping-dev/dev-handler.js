const loginScraper = require('./login-service');
const readingListScraper = require('./reading-list-service');
async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		const page = await loginScraper.scraper(browser);
		await page.waitForTimeout(2000);
		const readingList = await readingListScraper.scraper(page);
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)