$(function(){
  AOS.init();

  $(".menu").on({
    mouseover:function(){
      $(".nav_inner",this).stop().slideDown({
        display:'block'
      })
    },
    mouseout:function(){
      $(".nav_inner",this).stop().slideUp({
        display:'none'
      })
    }
  })

  $(".nav_bar").on({
    click:function(){
      $(".nav_slide_wrap").css({
        display:'block'
      })
      $(".nav_slide_all").stop().animate({
        right:'0'
      },500,'linear')
    }
  })

  $(".close").on({
    click:function(){
      $(".nav_slide_wrap").css({
        display:'none'
      },1000)
      $(".nav_slide_all").stop().animate({
        right:'-100%'
      },500,'linear')
    }
  })
  $('.product_img_warp').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 767, // 화면의 넓이가 600px 이상일 때
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      }},
      { breakpoint: 400, // 화면의 넓이가 400px 이상일 때
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  let scrollT ;
  let scrollP = 0;
  let delta = 5;
  let headerH = $("#header_wrap").outerHeight();

  $(window).scroll(function(){
    scrollT = true;
  });

  setInterval(function(){
    if(scrollT){
      scrolled();
      scrollT = false
    }
  },250);

  function scrolled(){
    let st = $(this).scrollTop();
 
    if(Math.abs(scrollP - st) <= delta)
    return;

    if(st > scrollP && st > headerH){
      // $("#header_wrap").addClass('navup')
      $("#header_wrap").stop().animate({
        top:'-101px',
        transition:'height 1s'
      },200,'linear')
    } else {
      if(st + $(window).height() < $(document).height()){
        // $("#header_wrap").removeClass('navup')
        $("#header_wrap").stop().animate({
          top:'0'
        },200,'linear')
      }
    }

    scrollP = st ;
  }
// 스크롤 올릴 때 nav 올라가고 내리면 없어짐

  $(".top").click(function(){
    $(window).scrollTop(0)
  })

  // scrool_icon
  $(".scroll_icon").on("click", function () {
    const h = $(".background_img").innerHeight() + 100; // 변경된 부분
    $("html, body").stop().animate({ scrollTop: h }, 600);
});
   



/////
});