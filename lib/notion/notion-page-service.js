
const {Client} = require('@notionhq/client');

const {NOTION} = require("../constants");

const notion = new Client({ auth: NOTION.NOTION_API_KEY })

const databaseId = NOTION.NOTION_DATABASE_ID
const notionPage = {
  async addItemToNotion(item, website) {
    try {
      const response = await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          title: {
              title: [
                {
                  text: {
                    content: item.title
                  },
                },
              ],
          },
          tags: {
              multi_select: item.tags || []
          },
          website:{
            select :{
              name:website
            }
          },
          link:{
              url: item.url
          },
      }
      })
      // console.log(response)
      console.log("Success! Entry added.")
      return response;
    } catch (error) {
      console.log(error);
      console.error(error.body)
    }
  }
}

module.exports = notionPage;
