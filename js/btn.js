$(function () {
  $('.menu-trigger').on('click', function () {
    // text = $('.menu-trigger__label').text;
    $('.nav-bar').slideToggle(500, 'linear');
    $('.menu-trigger__hamburger, .nav-bar').toggleClass('active');

  });


});
