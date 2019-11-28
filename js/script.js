
$(function () {
  $("#navi-btn").click(function () {
    if (!$("#navi-btn").hasClass("navi-btn-on")) {
      $("#navi-btn").addClass("navi-btn-on");
      $("#navi-btn p").text("CLOSE");
      $("#navi-menu").fadeIn();
    } else {
      $("#navi-btn").removeClass("navi-btn-on")
      $("#navi-btn p").text("MENU");
      $("#navi-menu").fadeOut();
    }
  });
});

// swiper

var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 5000, 
    stopOnLast: false, 
    disableOnInteraction: true 
  }
});

// アコーディオン
jQuery(function ($) {
  $('.question').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open');
  });

});

// スムーススクロール 

$(function(){
$('.nav-list-item a').click(function(){
  var id=$(this).attr('href');
  var position=$(id).offset().top;
  $('html, body').animate({
    'scrollTop':position
  },500);
});
});

$('.navi-menu li a').click(function(){
  var id=$(this).attr('href');
  var position=$(id).offset().top;
  $('html, body').animate({
    'scrollTop':position
  },500);
});

// トップへ戻る
$('.nav-logo').click(function () {
  $('html,body').animate({
    'scrollTop': 0
  }, 'slow');
});