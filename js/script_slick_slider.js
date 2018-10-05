$(window).on("load", function () {
	var count = 0;
	var sl_elem = "";




	$('.slider-photo').slick({
		centerMode: false,
		focusOnSelect: true,
		infinite: true,
		speed: 300,
		autoplay: false,
		autoplaySpeed: 4000,
		slidesToShow: 3,
		slidesToScroll: 3,

		responsive: [

			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
						},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
						},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
						},
			{
				breakpoint: 476,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
						}
						]
	});



	$('.slider-team').slick({
		centerMode: false,
		focusOnSelect: true,
		infinite: true,
		speed: 300,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [


			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
						},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
						}

						]
	});

	$('.slider-card-product').slick({
		centerMode: false,
		focusOnSelect: true,
		infinite: true,
		speed: 300,
		dots: true,
		autoplay: false,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1

	});


	$(".slick-dots").wrap("<div class='wrap-slider-nav'></div>");
	$(".slider-team").each(function (index) {
		//console.log($(this).find($(".slick-prev")));
		console.log("1");
		$(this).find($(".slick-prev")).prependTo($(this).find($(".wrap-slider-nav")));
		$(this).find($(".slick-next")).appendTo($(this).find($(".wrap-slider-nav")));
		var w = $(this).find($(".slick-list")).outerWidth();
		var v = $(this).find($(".wrap-slider-nav")).outerWidth();

		//		if (!($(this).closest(".slider-left").length)) {
		//			var styles = {
		//				position: "absolute",
		//				right: (w - v) / 2,
		//				left: "auto"
		//			};
		//		} else {

		var styles = {
			position: "absolute",
			left: (w - v) / 2,
			right: "auto"
		};
		//		}
		$(this).find($(".wrap-slider-nav")).css(styles);
	});

	$(".slider-card-product").each(function (index) {
		$(this).find($(".slick-prev")).prependTo($(this).find($(".wrap-slider-nav")));
		$(this).find($(".slick-next")).appendTo($(this).find($(".wrap-slider-nav")));
		var w = $(this).find($(".slick-list")).outerWidth();
		var v = $(this).find($(".wrap-slider-nav")).outerWidth();

		var styles = {
			position: "absolute",
			left: (w - v) / 2,
			right: "auto"
		};
		$(this).find($(".wrap-slider-nav")).css(styles);
	});


});
