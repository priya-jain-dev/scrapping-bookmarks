const { parse } = require('rss-to-json');
const notionStore = require('../notion/notion-store-service');


async function crawlerBookmarks(url){
	try{
        var rssBookmarks = await parse(url);
        if(rssBookmarks && rssBookmarks.items && rssBookmarks.items.length){
            //get last item from notion
            const bookmarks = rssBookmarks.items.map((item) =>  ({
                title: item.title, 
                url: item.link, 
                tags: [{name:item.category[0]}]
            }));
            console.log('bookmarks get from daily.dev length'+ bookmarks.length);
            const {success, length} = await notionStore.bulkCreatePage(bookmarks.reverse(), 'daily.dev');
            if(success){
                console.log(`🎊 🎊 successfully store in notion 🎊 🎊. And lenght is -> ${length}`);
            }
        }
        return true;
	}
	catch(err) {
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (url) => crawlerBookmarks(url)