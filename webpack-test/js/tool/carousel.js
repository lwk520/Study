var $ = require('../jquery/jquery-3.1.1.js')
	function Carousel($ct){
		this.$ct=$ct;
		this.init();
		this.addEvent();
	}

	Carousel.prototype.init=function(){

		this.pageIndex=0;
	var $imgCt=this.$imgCt=this.$ct.find('.img-play'),
		$imgList=this.$imgList=$imgCt.find('li'),
		$tab=this.$tab=this.$ct.find('.tab li'),
		$back=this.$back=this.$ct.find('.back'),
		$forth=this.$forth=this.$ct.find('.forth'),
		imgLen=this.imgLen=$imgList.length;

		this.pageOnoff = true;

		var firstImg=$imgList.eq(imgLen-1).clone(),
		lastImg=$imgList.eq(0).clone(),
		imgWidth=this.imgWidth=this.$ct.find('img').eq(0).width();
		$imgCt.prepend(firstImg);	
		$imgCt.append(lastImg);
		$imgCt.css({
			width:imgWidth*(imgLen+2),
			left:-imgWidth
		});
	}

	Carousel.prototype.preImg=function(n){
		if(!this.pageOnoff) return ;
		var _this=this
		this.pageOnoff=false;
		this.$imgCt.animate({
			left:'+='+this.imgWidth*n
		},500,function(){
			_this.pageIndex-=n;
			if (_this.pageIndex==-1){
				_this.pageIndex=3;
				_this.$imgCt.css('left',-_this.imgWidth*_this.imgLen);
			}
			_this.tabShow();
			_this.pageOnoff = true;
		})
	}
	Carousel.prototype.nextImg=function(n){
		if(!this.pageOnoff) return ;
		var _this=this
		this.pageOnoff=false;

		this.$imgCt.animate({
			left:'-='+this.imgWidth*n
		},500,function(){
			_this.pageIndex+=n;
			if (_this.pageIndex===_this.imgLen){
				_this.pageIndex=0;
				_this.$imgCt.css('left',-_this.imgWidth);
			}
			_this.tabShow();
			_this.pageOnoff = true;
		})		
	}
	Carousel.prototype.tabShow=function(){
		this.$tab.removeClass('active').eq(this.pageIndex).addClass('active')
	}



	Carousel.prototype.addEvent=function(){
		var _this=this;

		this.$forth.on('click',function(){

			_this.nextImg(1);
				
		})
		this.$back.on('click',function(){
				_this.preImg(1);	
		})

		this.$tab.on('click',function(){

			var nowIndex = _this.$ct.find('.tab>li.active').index();
			var featureIndex=$(this).index();
			if(nowIndex<featureIndex){
				_this.nextImg(featureIndex-nowIndex);
			}else if(nowIndex>featureIndex){
				_this.preImg(nowIndex-featureIndex)
			}

		})
	}

	module.exports= {
		init:function($ct){
			$ct.each(function(){
				new Carousel($(this))
			})
		}
	}

