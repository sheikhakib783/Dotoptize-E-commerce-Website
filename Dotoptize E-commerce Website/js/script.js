// =======counter
$('.data-count').counterUp({
    delay: 10,
    time: 2000,
});


  $('.brand-item').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      
    ]
  });


  
$('.testimonial_main').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots:false,
  arrows:true,
  prevArrow:'<a class="slick-prev slick-arrow " aria-label="Previous"><i class="fa-solid fa-arrow-left prev"></i></a>',
  nextArrow:'<a class="slick-prev slick-arrow " aria-label="Previous"><i class="fa-solid fa-arrow-right next"></i></a>',
  responsive: [
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      }
    },
    
  ]
});


(function($){
	"use strict";
	$(document).ready( function () {
		$('.testing').progressBar({
			value: "70",
			height: "35",
		});
	});
})(jQuery);

// ============Card Pricing=============//
const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "$119" ? "$19" : "$119";
  professional.textContent =
    professional.textContent === "$499" ? "$49 " : "$499";
  master.textContent = master.textContent === "$999" ? "$99" : "$999";
});