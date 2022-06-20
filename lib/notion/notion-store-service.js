const notionPage = require("./notion-page-service");

const notionStore = {
	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	},
	async bulkCreatePage(list, website){
		for (const item of list) {
			const contents = await notionPage.addItemToNotion(item, website);
			await this.sleep(100);
		}
		return Promise.resolve(true);
	}
}

module.exports = notionStore;