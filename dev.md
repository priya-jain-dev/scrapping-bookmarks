Steps :
1. npm init


https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer



https://github.com/webcat12345/brand-scraping/blob/master/index.js



const constants = {
    URLs: {
        DEV: {
            BASE: 'https://dev.to',
            LOGIN: 'https://dev.to/enter',
            READING_LIST: 'https://dev.to/readinglist',
        }
    },
    CREDS: {
        DEV: {
            EMAIL: 'YOUR_DEV_EMAIL',
            PASSWORD: 'YOUR_PASSWORD',
        }
    },
    NOTION:{
        NOTION_API_KEY:"YOUR_NOTION_API_KEY",
        NOTION_DATABASE_ID:"YOUR_NOTION_DATABASE_ID"
    }
}
module.exports = constants;