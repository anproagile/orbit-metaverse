$(function() {

	var header_sticky=$("header.-fix")

    if($('body').hasClass( "home" )){
        $(window).scroll(function(){
            $(this).scrollTop()>1?header_sticky.addClass("is-active"):header_sticky.removeClass("is-active")
        })
    }else{
        header_sticky.addClass("is-active")
    }

	new WOW().init();

	if($('body').hasClass('home')){
		$('.home-story-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
			easing: "linear",
			fade: true,
		});


		$('.home-play-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			dots: true,
			arrows: false,
			easing: "linear",
			variableWidth: true
		});

		$('.home-ecosystem-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			dots: true,
			arrows: false,
			easing: "linear",
			variableWidth: true
		});

		/**/
		$('.home-roadmap-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			dots: false,
			easing: "linear",
			fade: true
		});
		$('.js-home-roadmap-nav li').on("click",function(e) {
			var index = $(this).data('index')
		   $('.home-roadmap-slider').slick('slickGoTo', index);
		})

		$('.home-roadmap-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  $('.js-home-roadmap-nav li').removeClass('active')
		  $('.js-home-roadmap-nav li[data-index="'+nextSlide+'"]').addClass('active')
		});

		$('.home-ourteam-slider01').slick({
			rows: 2,
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: false,
			dots: false,
			easing: "linear",

		});


		$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
		  $('.js-slick').slick('setPosition');
		})

		$('.home-partners-slider').slick({
			rows: 2,
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			dots: false,
			easing: "linear",
			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});

		$('.js-slick .slider__item[data-bs-toggle="modal"]').on("click",function(e) {
			var content = $(this).find('.js-slider-content').html()
			$('.js-modal-body').html(content)
		})

	}

	//-------------------------------------------------
    // Menu
    //-------------------------------------------------
    $('.nav__mobile--close').click(function(e){
        $('.nav__mobile').removeClass('active')
        $('body').removeClass('modal-open')
    });
    $('.menu-mb__btn').click(function(e){
        e.preventDefault()
        $('body').addClass('modal-open')
        // $('.menu-mb__btn').addClass('active')
        $('.nav__mobile').addClass('active')
    });


	if($('body').hasClass('games')){
		var setSliderCurrent = $('.games-slider').data('current')
		var $carousel = $('.games-slider').flickity()
		.flickity('next')
		.flickity( 'select', parseInt(setSliderCurrent)  );
	}

	var back_to_top=$(".scrollTop"),offset=220,duration=200;$(window).scroll(function(){
		$(this).scrollTop()>offset?back_to_top.addClass("active"):back_to_top.removeClass("active")}),
	$(document).on("click",".scrollTop",function(o){
		return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1
	});

});