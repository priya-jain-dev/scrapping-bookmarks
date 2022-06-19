
const {Client} = require('@notionhq/client');

const {NOTION} = require("../constants");

const notion = new Client({ auth: NOTION.NOTION_API_KEY })

const databaseId = NOTION.NOTION_DATABASE_ID

async function addItemToNotion(title, link, tags) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
            title: [
              {
                text: {
                  content: title
                },
              },
            ],
        },
        tags: {
            multi_select: tags
        },
        website:{
            select:{
                name:"dev.to"
            }
        },
        link:{
            url: link
        },
    }
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

// addItemToNotion("JavaScript Module Cheatsheet 📄‬","https://dev.to/samanthaming/javascript-module-cheatsheet-5b4o",[{name:"codenewbie"},{name:"webdev"},{name:"javascript"},{name:"beginners"}])