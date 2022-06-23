const notionPage = require("./notion-page-service");
const notionQuery = require("./notion-query-service");

const notionStore = {
	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	},
	async bulkCreatePage(list, website){
		console.log(`before list lenght -> ${list.length}`);
		const lastRow = await notionQuery.getLastItemFromSite(website);
		if(lastRow){
			const lastRowTitle = lastRow.properties.title.title[0].plain_text;
			const lastRowIndex = list.map(e => e.title).indexOf(lastRowTitle);
			console.log(`lastRowIndex -> ${lastRowIndex}`);
			list.splice(0, lastRowIndex + 1);//first to index find
			console.log(`after list lenght-> ${list.length}`);
		}
		
		if(list && list.length){
			for (const item of list) {
				const contents = await notionPage.addItemToNotion(item, website);
				await this.sleep(50);
			}
			return Promise.resolve({success:true, length :list.length});

		} else{
			console.log('No data found to save in notion.');
			return Promise.resolve({success:truefalse, length :0});
		}
	}
}

module.exports = notionStore;