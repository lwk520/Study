var $ = require('./jquery/jquery-3.1.1.js')
var Carousel = require('./tool/carousel.js')
var Water = require('./tool/water.js');
var goTop = require('./tool/GoTop.js')

	Carousel.init($('.carousel'))


	function isImgLoad (){
		$('img').on('load',function(){
 			Water.init()		
		})
	}
	isImgLoad();
	/*-------ajax*/
	$('.loadMore').on('click',function(){
	  $.ajax({
	    type : 'POST',
	      url : '/getImg',
	      data : 'getImg'
	    }).done(function(ret){
	      if(ret.status === 0){
	        dealWith(ret.data)
	      }else{
	        console.log('statua错误')
	      }
	    })
	})

	function dealWith( data ){
	  for(var i=0; i<data.length; i++){
	    var str='';
	    str +='<li><a href="#header"><img src="'+data[i].imgSrc
	    str +='"><div class="mask"><i class="iconfont icon-buoumaotubiao11"></i></div></a><h2>'+data[i].title;
	    str+='</h2><p>'+data[i].content+'</p></li>';
	    $('.port-pic').append(str);
	    isImgLoad();
	  }
	}
	//var goTop1=GoTop($(document.body));