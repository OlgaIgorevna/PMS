$(window).on("load", function () {
	//
	$(".services .item").on("click", function (e) {

				$(this).toggleClass("active");
//			$(this).children(".info").slideToggle();
		
		//		$(this).children(".info").toggle(
		//			function () {
		//				$(this).slideDown();
		////				alert("1");
		//			},
		//			function () {
		//				$(this).hide();
		////				alert("2");
		//
		//			});

//		$(this).toggle(
//			function () {
//				$(this).children(".info").slideDown();
//				//				alert("1");
//			},
//			function () {
//					$(this).children(".info").hide();
//				//				alert("2");
//
//			});
	});


	//	$(".services .item").on("toggle", function (e) {}



});

//	$(".services .item").toggle(
//		function(){
//				$(this).find(".info").slideDown();
//		
//		},
//		function(){
//				$(this).find(".info").hide();
//		}
//	);
