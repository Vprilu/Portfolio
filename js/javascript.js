$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})
$('.menu_btn').on('click', function(e){
		e.preventDefault();
		$('.menu_btn').toggleClass('menu-btn_active');
		$('.nav_mobile_burger').toggleClass('nav_mobile_burger_active');
	});	

$('.menu_btn').on('click', function(e){
	e.preventDefault();
		$('.nav_mobile_menu').toggleClass('nav_mobile_menu-active');
	});	

$('.menu-nav__link').on('click', function(e){
		$('.nav_mobile_menu').toggleClass('nav_mobile_menu-active');
		$('.menu_btn').toggleClass('menu-btn_active');
		$('.nav_mobile_burger').toggleClass('nav_mobile_burger_active');
	});	

  $("a").click(function(e){
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

    $('.header__headbutton__button').on('click', function(e){
        $('.header__formsend').toggleClass('header__formsend_active');
    }); 

    $('.contact__form>.header__headbutton__button').on('click', function(e){
        e.preventDefault();
    swal("Кнопка не работает", "Но скоро заработает", "info")
    }); 