// ハンバーガーメニュー
$(function () {
  $('.menu-trigger').on('click', function () {

    $('.nav-bar').slideToggle(100, 'swing');
    $('.menu-trigger__hamburger, .nav-bar').toggleClass('active');

    if ($('.nav-bar').hasClass('active')) {
      $('.menu-trigger__label').text('close');
    } else {
      $('.menu-trigger__label').text('menu');
    }

  });

  // topへ戻る
  $('#top').on('click', function () {

    $('body,html').animate({ scrollTop: 0 }, 500);
  });

});
