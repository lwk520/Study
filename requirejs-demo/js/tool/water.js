define('./tool/water',['jquery'],function($){
		function render(){	
			var $wrap=$('.portfolio .port-pic'),
				$item=$wrap.find('li')		
			var itemWidth=$item.eq(0).outerWidth(true);
			var num=Math.floor($wrap.width()/itemWidth);
			var itemHeight=[];
			var minIndex=0;
			var minHeight=0;
			var maxIndex=0;/*解决元素高度坍塌*/

			/*找出最小的一行*/
			function findMin(){
				for(var i=0; i<num; i++){
					if(itemHeight[minIndex]>itemHeight[i]){
						minIndex=i;
					}
				}
				minHeight=itemHeight[minIndex];
			}

			/*刚开始第一行按顺序排开*/
			for(var i=0; i<num; i++){

				itemHeight.push(0)
			}

			for(var i=0; i<$item.length; i++){
				findMin();
				$item.eq(i).css({
					left: minIndex*itemWidth,
					top: minHeight
				})
				itemHeight[minIndex]+=$item.eq(i).outerHeight(true)
			}

			//解决元素高度坍塌
			for(var i=0; i<num; i++){
				if(itemHeight[maxIndex]<itemHeight[i]){
					maxIndex=i;
				}
			}
			$wrap.height(itemHeight[maxIndex])


		}
		window.onresize=function(){
			render();
		}
		return {
			init:render
		};
})
	