jQuery(function($){

	/*----Fixed navbar----*/
	jQuery(window).bind('scroll', function() {
		if (jQuery(window).scrollTop() > 200) {
			jQuery('.mu-main-navbar').addClass('navbar-bg');
			jQuery('.navbar-brand').addClass('navbar-brand-small');
		} else {
			jQuery('.mu-main-navbar').removeClass('navbar-bg');
			jQuery('.navbar-brand').removeClass('navbar-brand-small');
		}
	});
/*====Date picker====*/
	jQuery('#datepicker').datepicker();
/*==== Top slider====*/
	jQuery('.mu-top-slider').slick({
		infinite:true,
		arrows:true,
		speed:500,
		autoplay:true,
		fade:true,
		cssEase:'linear'
	});
	/*====About-Slider====*/
	jQuery('.mu-abtus-slider').slick({
		infinite:true,
		dots:false,
		speed:600,
		autoplay:true,
		fade:true,
		cssEase:'linear',
		arrows:false
	});
	/*====Counter=====*/
	jQuery('#mu-counter .counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*-====Testimonial======*/
    jQuery('.testimonial-slider').slick({
    	dots: true,
    	infinite:true,
    	arrows:false,
    	autoplay:true,
    	speed:500,
    	cssEase: 'linear'
    });
    /*======Chef=====*/
    jQuery('.chef-nav').slick({
    	dots:true,
    	infinite:true,
    	arrows:false,
    	autoplay:true,
    	speed:300,
    	slidesToShow:4,
    	slidesToScroll:2,
    	autoplaySpeed:2500,
    	responsive:[
    	{
    		breakpoint:1024,
    		settings:{
    			slidesToShow:3,
    			slidesToScroll:3,
    			infinite:true,
    			dots:true
    		}
    	},
    	{
    		breakpoint:776,
    		settings:{
    			slidesToShow:2,
    			slidesToScroll:2
    		}
    	},
    	{
    		breakpoint:480,
    		settings:{
    			slidesToShow:1,
    			slidesToScroll:1
    		}
    	}
    	]
    });

    /*=====preloader======*/
    jQuery(window).load(function() { // makes sure the whole site is loaded      
      jQuery('#preloader').delay(300).fadeOut('slow'); // will fade out      
    });

/*======Scroll To Top=====*/
	jQuery(window).scroll(function(){
      if (jQuery(this).scrollTop() > 300) {
        jQuery('.scrollToTop').fadeIn();
      } else {
        jQuery('.scrollToTop').fadeOut();
      }
    });


	jQuery('.scrollToTop').click(function(){
      jQuery('html, body').animate({scrollTop : 0},800);
      return false;
    });
});





/*----Navbar-toggle-----*/
$(document).ready(function (){
	$('.header-btn').click(function (){
		$('.mu-main-nav').toggleClass('show')
	});
});