const notionStore = require('../notion/notion-store-service');
const loginScraper = require('./login-service');
const readingListScraper = require('./reading-list-service');
async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		const page = await loginScraper.scraper(browser);
		await page.waitForTimeout(2000);
		const readingList = await readingListScraper.scraper(page);
		await browser.close();
		console.log('readingList get success');
		const storeInNotion = await notionStore.bulkCreatePage(readingList.reverse(), 'dev.to');
		console.log('🎊 🎊 successfully store in notion 🎊 🎊');
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)