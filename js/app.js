$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 220) {
      $('#menu').addClass('fixed');
    } else {
      $('#menu').removeClass('fixed');
    }
  });
});
