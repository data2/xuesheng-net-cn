$(function() {
		
		// $("#mobile-menu").click(function(){
		// 	//alert($("#menupage"));
			
		// });

		// 监听所有点击事件
		$(document).on("click",function(event){
			var target = $(event.target);
			var menupage = $("#menupage");
			if(target.is($("#mobile-menu"))){
				//弹出menu
				$("#menupage").css("left","0px");
			}else if(!target.is(menupage) && !$.contains(menupage[0],target[0]) ){
				$("#menupage").css("left","-1000px");
			}
		});
});