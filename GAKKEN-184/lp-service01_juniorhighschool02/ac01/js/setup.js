//スクロールの制御
$('a[href^="#"]').click(function (e) {
  var headerHight = 70;   /* ヘッダーの高さ(70px) */
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - headerHight;

  $.when(
    $("html, body").animate({
      scrollTop: position
    }, 400, "swing"),
    e.preventDefault(),
  ).done(function () {
    var diff = target.offset().top - headerHight;
    if (diff === position) {
    } else {
      $("html, body").animate({
        scrollTop: diff
      }, 10, "swing");
    }
  });
});


//slick
$('#banner_box').slick({
  autoplay: true, //自動でスクロール
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  slidesToShow: 1, //表示するスライドの数
  arrows: false,
  dots: true, //スライドしたのドット
});
//slick
// $('#banner_box_2').slick({
//   autoplay: false, //自動でスクロール
//   infinite: true,
//   speed: 300, //スライドが流れる速度を設定
//   slidesToShow: 1, //表示するスライドの数
//   arrows: false,
//   dots: false, //スライドしたのドット
//   adaptiveHeight: true
// });
// $('#issue_box').slick({
//   autoplay: true, //自動でスクロール
//   infinite: true,
//   speed: 300, //スライドが流れる速度を設定
//   slidesToShow: 3, //表示するスライドの数
//   arrows: false,
//   centerMode: true,
//   variableWidth: true,
// });

$('#slickFeedback02').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 300,
  arrows: true,
  centerMode: true,
  variableWidth: true,
});


// アコーディオンメニューの設定
var coll = document.getElementsByClassName("collapse");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    }
    else {
      content.style.display = "block";
    }
  });
}

//アコーディオンをクリックした時の動作
$('.faq_q').on('click', function () { //タイトル要素をクリックしたら
  var findElm = $(this).next(".faq_a"); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作

  if ($(this).hasClass('close')) { //タイトル要素にクラス名closeがあれば
    $(this).removeClass('close'); //クラス名を除去し
  } else { //それ以外は
    $(this).addClass('close'); //クラス名closeを付与
  }
});


//ここに書いた処理はスマホの時は無効
if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
  /* Formエリアに入ったらconversionを消す */
  $(window).scroll(function () {
    var scroll_len = $(window).scrollTop();
    var bottom_len = $("body").height() - $(window).height();
    if (scroll_len > 700 && scroll_len < bottom_len - 2500) {
      $('#conversion').fadeIn();
    } else {
      $('#conversion').fadeOut();
    }
  });
}

//ここに書いた処理はスマホの時だけ有効
if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
  /* Formエリアに入ったらconversionを消す */
  $(window).scroll(function () {
    var scroll_len = $(window).scrollTop();
    var bottom_len = $("body").height() - $(window).height();
    if (scroll_len > 550 && scroll_len < bottom_len - 1350) {
      $('#conversion').fadeIn();
    } else {
      $('#conversion').fadeOut();
    }
  });
}


$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var docHeight = $(document).height();
  
  var showConversionThreshold = 650;
  var hideConversionThreshold = docHeight - 450;

  if (scrollTop > showConversionThreshold && scrollTop + windowHeight < hideConversionThreshold) {
    $('#conversion').removeClass('dnone').addClass('db');
  } else {
    $('#conversion').removeClass('db').addClass('dnone');
  }
});

// function goToSlick(number) {
//   $('#banner_box_2').slick('slickGoTo', number);
// }

$(document).ready(function () {
  lightbox.option({
    'albumLabel': ""
  })

  $(".inline").colorbox({
    inline: true,
    width: "100%"
  });

  $(".inline2").colorbox({
    inline: true,
    width: "100%"
  });

  $(".inline3").colorbox({
    inline: true,
    width: "100%"
  });

  $("#cboxTopLeft").hide();
  $("#cboxTopRight").hide();
  $("#cboxBottomLeft").hide();
  $("#cboxBottomRight").hide();
  $("#cboxMiddleLeft").hide();
  $("#cboxMiddleRight").hide();
  $("#cboxTopCenter").hide();
  $("#cboxBottomCenter").hide();
});

$(".faq_btn").on('click', function () {
  $(".faq_btn").removeClass('active')
  $(this).addClass('active');
})

// $(document).ready(function(){
//   $(".btnShowMore").click(function(){
//     $(this).prev(".pointSliderItem").find(".showMoreBlock").slideDown("fast", function(){
//       $('.pointSlider').slick("setPosition"); // Cập nhật lại kích thước của slider sau khi mở rộng nội dung
//     });
//     $(this).hide();
//   });
// });

$('.pointSlider').slick({
  autoplay: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  adaptiveHeight:true,
  prevArrow: $('.point-slick-prev'),
  nextArrow: $('.point-slick-next')
});

$('.brandSlider').slick({
  autoplay: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  prevArrow: $('.brand-slick-prev'),
  nextArrow: $('.brand-slick-next')
});

$(".showMoreBtn").click(function () {
  $(this).parent().find(".showMoreBlock").slideDown("fast");
  $(this).hide();
  $(this).parent().find(".showLessBtn").show();
  $('.pointSlider').find(".slick-list").height("auto");
});

$(".showLessBtn").click(function () {
  $(this).parent().find(".showMoreBlock").slideUp("fast");
  $(this).hide();
  $(this).parent().find(".showMoreBtn").show();
  $('.pointSlider').find(".slick-list").height("auto");
});
