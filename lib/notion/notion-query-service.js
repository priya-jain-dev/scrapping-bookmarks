const { Client } = require('@notionhq/client');
const {NOTION} = require("../constants");

const notion = new Client({ auth: NOTION.NOTION_API_KEY });

const databaseId = NOTION.NOTION_DATABASE_ID;
const notionQuery = {
    async getLastItemFromSite(website) {
        try {
            const response = await notion.databases.query({
                database_id: databaseId,
                filter: {
                    property: 'website',
                    select: {
                        equals: website
                    }
                },
                sorts: [
                    {
                        property: 'created at',
                        direction: 'descending',
                    },
                ],
                page_size: 1
            });
            if (response && response.results && response.results.length) {
                console.log(response.results[0].properties.title.title[0].plain_text);
                return Promise.resolve(response.results[0])
            }
        } catch (error) {
            console.log(error);
            console.error(error.body)
            return Promise.reject(error);
        }
    }
}
module.exports = notionQuery;
// notionQuery.getLastItemFromSite("dev.to");