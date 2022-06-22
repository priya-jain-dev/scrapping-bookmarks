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
            EMAIL: `${process.env.DEV_EMAIL}`,
            PASSWORD: `${process.env.DEV_PASSWORD}`,
        }
    },
    NOTION:{
        NOTION_API_KEY:`${process.env.NOTION_API_KEY}`,
        NOTION_DATABASE_ID:`${process.env.NOTION_DATABASE_ID}`
    }
}
module.exports = constants;