/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/hello', function(req, res) {
	res.send({
		status: 0,
		msg: "hello 饥人谷"
	});
});


/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/user/:uid', function(req, res) {
	console.log(req.params.uid); //100
	console.log(req.query.name); // 'ruoyu'
	res.send({
		status: 1,
		errorMsg: "请先注册"
	});
});


/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }
 */
app.post('/comment', function(req, res) {
	console.log(req.body.comment); // "这是评论内容"
	res.send({
		status: 0,
		data: {
			cid: 100,
			comment: "这是评论内容"
		}
	});
});



/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
app.get('/user', function(req, res) {
	res.render('user.ejs', {
		username: '饥人谷'
	});
});

app.post('/getImg',function(req, res){
	console.log(req);
	var sendData = {
		status : 0, 
		data :	[
				{
					imgSrc : './images/hot1.jpg',
					title : 'Treehouse',
					content : 'Towering genius disdains a beaten path. It seeks regions hitherto unexplored. 　-- Lincoln 　　 卓越的天才不屑走旁人走过的路。他寻找迄今未开拓的地区。'
				},
				{
					imgSrc : './images/hot2.jpg',
					title : 'Startup Framework',
					content : 'Live a noble and honest life. Reviving past times in your old age will help you to enjoy your life again.过一种高尚而诚实的生活。当你年老时回想起过去，你就能再一次享受人生。' 
				},
				{
					imgSrc : './images/hot3.jpg',
					title : 'Round Icons',
					content : 'Accept what was and what is, and you’ll have more positive energy to pursue what will be.接受过去和现在的模样，才会有能量去追寻自己的未来。'
				}
			]
	}

	res.send( sendData )
})