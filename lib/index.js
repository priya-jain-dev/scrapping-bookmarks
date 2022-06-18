const browserObject = require('./browser');
const devHandler = require('./scraping-dev/dev-handler');

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
devHandler(browserInstance)