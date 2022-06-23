# scrapping-bookmarks
Scrapping bookmarks from dev.to | hashnode.com and storing in notion database using GitHub actions.

## Store dev.to 🔖 reading list to notion.so database



#### Steps to run as a cron job
1. Fork repository - https://github.com/priya-jain-dev/scrapping-bookmarks.git

2. Set Github action secrets for your creadiential and notion key

    ```yml
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    DEV_EMAIL: ${{ secrets.DEV_EMAIL }}
    DEV_PASSWORD: ${{ secrets.DEV_PASSWORD }}
    NOTION_API_KEY: ${{ secrets.NOTION_API_KEY }}
    NOTION_DATABASE_ID: ${{ secrets.NOTION_DATABASE_ID }}
    ```
    **Document to follow -** https://docs.github.com/en/actions/security-guides/encrypted-secrets

3. After basic setup action will trigger `npm start` every **24 hours**.

#### Steps to run locally

1. `Node version - 16.15.1`

2. Go to `lib/constants.js` file and edit values accordingly.

3. Optional - Go to `lib/browser.js` file and set `headless:false` to see process running.

3. Run `npm start`


#### Packages are in use
1. **@notionhq/client** - To get and store data in notion
2. **puppeteer** - To get data from dev.to

*📝 Note: After complete setup I got to know there is dev.to Apis in **beta** version. Thats why using puppeteer.*
