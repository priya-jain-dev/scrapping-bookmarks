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
            EMAIL: `${EMAIL}`,
            PASSWORD: `${PASSWORD}`,
        }
    },
    NOTION:{
        NOTION_API_KEY:"YOUR_NOTION_API_KEY",
        NOTION_DATABASE_ID:"YOUR_NOTION_DATABASE_ID"
    }
}
module.exports = constants;