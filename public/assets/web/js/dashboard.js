$(document).ready(function(){
    $(".desktop-tips_icon").click(function(){
      $(".tips_section").toggleClass("hide_tips");
      $(".main_content .main_content_iner").toggleClass("w-100");
      $(".eye_enable").toggleClass("fa-eye fa-eye-slash");
    });


    $('.eye_disable').on('click', function() {
        $('.tips_section').toggleClass('active_tips');
    });

    
  });




if($(window).innerWidth() <= 991) {
    $(".eye_enable").removeClass("eye_enable desktop-tips_icon").addClass("eye_disable");
 } 
 else {
   
 }

  $('.ads_carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.ads_carousel-2').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    dots:true,
    items:3,
    responsive:{
        0:{
            items:1,
            dots:true
        },
        480:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})