/*导航*/
$(function(){
		var wwidth=$(window).width();	
		$(".dropdown-box").hover(function(){
		
		$(".dropdown").show();
		
		if(wwidth<=768){
			$("a.active",$(this)).css({"background":"#fff"});
			
		}else{
			$("a.active",$(this)).css({"background":"rgba(0,0,0,.2)"});
		}
	},function(){
		$(".dropdown").hide();
		
		$("a.active",$(this)).css({"background":""});
	});
	//平板
	
	$("a.meau").click(function(){
			$(".nav-right ul.nav-item").css({"display":"block"});
			$(".nav-btn").show();
	});
	//平板单击产品
	$(window).resize(function(){
		var wwidth=$(window).width();	
		if(wwidth>768){
			console.log("大屏"+wwidth);
			$(".dropdown-box a.active").css({"color":"#fff"});
			$("i",$(".dropdown-box a.active")).css({"color":"#fff"});
		}else{
			$(".dropdown-box a.active").css({"color":"#333"});
			$("i",$(".dropdown-box a.active")).css({"color":"#333"});
			$(".dropdown-box a.active").click(function(){
				$(this).css({"color":"#0ab1fc"});
				$("i",$(this)).css({"color":"#0ab1fc"});
					
			});
			console.log("小屏"+wwidth);
			
		}
	})
	//轮播图开始
	$(".banner-img a:not(.not)").hide;
	$(".banner-btn a").click(function(){
		var index=$(this).index();
		$(".banner-img a").hide().eq(index).show();
		$(".banner-btn a").removeClass("active");
		$(this).addClass("active");
	})
	

})
