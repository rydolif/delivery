$(function() {

  
$('.tabs__wrap').hide();
$('.tabs__wrap:first').show();
$('.tabs ul a:first').addClass('active');
 $('.tabs ul a').click(function(event){
  event.preventDefault();
  $('.tabs ul a').removeClass('active');
  $(this).addClass('active');
  $('.tabs__wrap').hide();
   var selectTab = $(this).attr('href');
  $(selectTab).fadeIn();
});

//------------------------------project-hero-----------------------------
  var swiper = new Swiper('.project__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    scrollbar: {
      el: '.project__scrollbar',
      hide: true,
    },
  });

//------------------------------slider-hero-----------------------------
  var swiper = new Swiper('.reviews__slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    scrollbar: {
      el: '.reviews__scrollbar',
      hide: true,
    },
  });

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('nav').toggleClass('nav--active');
    $('header').toggleClass('header--menu');
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});


//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
      }
  });

  if($(this).scrollTop()>20){
      $('.header').addClass('header--active');
  }
  
//-------------------------скорость якоря---------------------------------------
  $(".header__list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
  //--------------------закриття меню при кліку на ссилку якоря--------------------
     // $('.hamburger').removeClass('hamburger--active');
     // $('.header-menu').removeClass('header-menu');
     // $('.header--active').removeClass('header--active');
     // $('.nav--active').removeClass('nav--active');

  });
  
});