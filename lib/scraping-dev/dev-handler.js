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
		if(readingList && readingList.length){
			console.log('readingList get from dev.to length'+ readingList.length);
			const {success, length} = await notionStore.bulkCreatePage(readingList.reverse(), 'dev.to');
			if(success){
				console.log(`🎊 🎊 successfully store in notion 🎊 🎊. And lenght is -> ${length}`);
			}
		}
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)