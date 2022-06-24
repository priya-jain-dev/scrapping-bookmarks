const { parse } = require('rss-to-json');
const notionStore = require('../notion/notion-store-service');

const convertUrl = (url) => {
    const lastPart = url.split('/');
    const postId = lastPart[lastPart.length - 1].split('?')[0]
    return `https://api.daily.dev/r/${postId}`
}

async function crawlerBookmarks(url){
	try{
        var rssBookmarks = await parse(url);
        if(rssBookmarks && rssBookmarks.items && rssBookmarks.items.length){
            //get last item from notion
            const bookmarks = rssBookmarks.items.map((item) =>  {
                let tags = [];
                item.category && item.category.length && Array.isArray(item.category) ? item.category.forEach(element => {
                    tags.push({name:element})
                }) : typeof item.category === 'string' && tags.push({name:item.category}) ;

                return {
                    title: item.title, 
                    url: convertUrl(item.link), 
                    tags:tags
                }
            });

            console.log('bookmarks get from daily.dev length'+ bookmarks.length);
            const {success, length} = await notionStore.bulkCreatePage(bookmarks, 'daily.dev');
            if(success){
                console.log(`🎊 🎊 successfully store in notion 🎊 🎊. And lenght is -> ${length}`);
            }
        }
		return Promise.resolve(true);
	}
	catch(err) {
		console.log("Could not resolve the browser instance => ", err);
        return Promise.reject(err);
	}
}

module.exports = (url) => crawlerBookmarks(url)

