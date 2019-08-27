// ハンバーガーメニュー
$(function () {
  $('.menu-trigger').on('click', function () {

    $('.nav-bar').slideToggle(100, 'swing');

    $('.menu-trigger__hamburger, .nav-bar').toggleClass('active');

  });


  // topへ戻る
  $('#top').on('click', function () {

    $('body,html').animate({ scrollTop: 0 }, 500);
  });

});
