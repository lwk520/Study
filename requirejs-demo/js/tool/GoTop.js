define('tool/GoTop',['jquery'],function($){
  function GoTop ($ct){
    _this=this;
    this.$ct=$ct;
    this.$target=$(document.createElement('a'))
    
    
    this.createNode();
    this.bindEvent();
    
  }



  GoTop.prototype={
    constructor : GoTop,
    createNode : function(){
      this.$ct.css('position','relative')
      this.$target.css({
         position:'fixed',
         bottom:0,
         right:0,
         height:80,
         width:80,
         backgroundColor: 'rgba(51,51,51,0.8)',
         cursor:'pointer',
         textAlign:'center',
         lineHeight:'80px',
         color:'#fff',
         fontWeight : 'bold',
         fontSize : '18px',
         borderRadius : '40px'
      })
      this.$target.text('GO TOP');
      this.$ct.append(_this.$target)
      this.$target.hide();
    },
    bindEvent : function(){
      var _this=this;
      $(window).on('scroll',function(){
          if($(window).scrollTop()>50){
          _this.$target.show();
        }else{
          _this.$target.hide();
        }  
        
      })
      this.$target.on('click',function(){
        $(window).scrollTop(0);
      })
    }
  }
  var goTop1=new GoTop($(document.body));
})