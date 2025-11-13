$(document).ready(function(){

  var stopPlay = true;
  var _w = $("#main_banner > ul > li").width();
  var dir = "-=";

  var autoSlide = setInterval(slideAni,3000);

  $("#main_banner").mouseenter(function(){
    clearInterval(autoSlide);
  });
  $("#main_banner").mouseleave(function(){
    autoSlide = setInterval(slideAni,3000);
  });

  $(".prev, .next").click(function(){
    clearInterval(autoSlide);
    if($(this).hasClass("prev")){
      dir = "+=";
    }else{
      dir = "-=";
    }
    slideAni();
  });

  $('#new_prod_list').slick({
  arrows: false,
  dots: true,
  infinite: false,
  speed: 300,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



  function slideAni(){
    $("#main_banner > ul").animate({"marginLeft": dir + _w}, 1000, function(){
      if(dir == "-="){
        $("> li:first-child", this).appendTo($(this));
      }else{
        $("> li:last-child", this).prependTo($(this));
      }
        $(this).css("margin-left", "-"+_w+"px");
    });
  };

});
