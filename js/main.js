;(function($){
	"use strict";
	$(function(){
		$('.ba-slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			variableWidth: true,
			speed: 800,
			cssEase: 'ease-in',
			adaptiveHeight: true,
			touchMove: true,
			slide: ".ba-slider-item",
			focusOnSelect: false,
			prevArrow: ".ba-slider-prev",
			nextArrow: ".ba-slider-next",
			responsive: [
			    {
			    	breakpoint: 1024,
			    	settings: {
			    	slidesToShow: 3,
			    	slidesToScroll: 1,
			    	infinite: true
			    	},
			        breakpoint: 600,
			        settings: {
			        slidesToShow: 1,
			        centerMode: true,
			        centerPadding: true,
			        slidesToScroll: 1,
			        infinite: true
			    	}
			    }
			]
		});
	});

})(jQuery);
