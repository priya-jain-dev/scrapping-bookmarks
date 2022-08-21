const browserObject = require('./browser');
const devHandler = require('./scraping-dev/dev-handler');
const dailyDevHandler = require('./crawler-daily-dev/daily-dev-handler');
const { DAILYDEV } = require('./constants');

//Start the browser and create a browser instance
// let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
(async () => {
    // await devHandler(browserInstance);
    // console.log(`Completed dev.to bookmark crawler.`);
    await dailyDevHandler(DAILYDEV.BOOKMARK_RSS_URL);
    console.log(`Completed daily.dev bookmark crawler.`);
})();


