$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $('#menu').addClass('fixed');
    } else {
      $('#menu').removeClass('fixed');
    }
  });
});

$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    //ヘッダーの高さを取得
    var header = $('header').height() - 50;
    //ヘッダーの高さを引く
    var position = target.offset().top - header;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
})

let topBtn = $('.b-scroll');
topBtn.hide();
$(window).on('scroll', function () {
  let doch = $(document).innerHeight(); //ページ全体の高さ
  let winh = $(window).innerHeight(); //ウィンドウの高さ
  let bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
  if (bottom <= $(window).scrollTop()) {
    //一番下までスクロールした時に実行
    // console.log("最底辺！");
    topBtn.fadeIn();
  } else {
    topBtn.fadeOut();
  }
});
topBtn.click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});

function initparticles() {
  bubbles();
}

function bubbles() {

  $.each($(".ptext.bubbles"), function () {
    let bubblecount = ($(this).width() / 50) * 10;
    // alert(bubblecount)
    for (let i = 0; i <= bubblecount; i++) {
      let size = ($.rnd(40, 80) / 10);
      $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
    }
  });
}

jQuery.rnd = function (m, n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor(Math.random() * (n - m + 1)) + m;
}

initparticles();
