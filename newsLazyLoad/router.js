/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/getNews', function(req, res) {

	var dataNews=[
		{
			url:'http://inews.gtimg.com/newsapp_ls/0/1103358898_150120/0',
			words:'媒体揭秘：首艘国产航母真的会叫“山东舰”么？'
		},
		{
			url:'http://inews.gtimg.com/newsapp_ls/0/1102934878_150120/0',
			words:'河北山东等8省今日有大雾 局地能见度不足50米'
		},
		{
			url:'http://inews.gtimg.com/newsapp_ls/0/1102808469_150120/0',
			words:'春节各省份旅游收入排行榜出炉：15省收入超百亿'
		},
		{
			url:'http://inews.gtimg.com/newsapp_ls/0/1102836464_12088/0',
			words:'美再裁定我国钢铁产品“双反” 商务部表示不满'
		},
		{
			url:'http://inews.gtimg.com/newsapp_ls/0/1102833188_12088/0',
			words:'宁波旅行团在台遭遇车祸 司机称路况不熟加分心'
		},
		{
			url:'http://inews.gtimg.com/newsapp_ls/0/1102833326_12088/0',
			words:'山东城管初三上街撕“福”引争议 是否滥用职权？'
		},{
			url:'http://inews.gtimg.com/newsapp_ls/0/1103358898_150120/0',
			words:'媒体揭秘：首艘国产航母真的会叫“山东舰”么？'
		},
		{
			url:'http://inews.gtimg.com/newsapp_ls/0/1102934878_150120/0',
			words:'河北山东等8省今日有大雾 局地能见度不足50米'
		},
		{
			url:'http://inews.gtimg.com/newsapp_ls/0/1102808469_150120/0',
			words:'春节各省份旅游收入排行榜出炉：15省收入超百亿'
		}
	];

	var pageIndex=Number(req.query.pageIndex);
	var len=3;

	var sendData=dataNews.slice(pageIndex*len,(pageIndex+1)*len);
	
	res.send({
			status:0,
			data:sendData
		});
});

