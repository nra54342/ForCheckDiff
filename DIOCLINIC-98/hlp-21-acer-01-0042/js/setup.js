//inview
$(".iv").on("inview", function (event, isInView) {
  if (isInView) {
    $(this).stop().addClass("show");
  }
});

//スクロールの制御
$('a[href^="#"]').click(function(e) {
  var headerHight = 70;   /* ヘッダーの高さ(70px) */
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - headerHight;

	$.when(
		$("html, body").animate({
			scrollTop: position
		}, 400, "swing"),
		e.preventDefault(),
	).done(function() {
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
$('#voice_slider').slick({
  autoplay: true, //自動でスクロール
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  dots: true,
  slidesToShow: 1, //表示するスライドの数
  prevArrow: $('.voice-slick-prev'),
  nextArrow: $('.voice-slick-next')
});
$('#approach01_slider').slick({
  autoplay: true, //自動でスクロール
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  dots: false,
  slidesToShow: 1, //表示するスライドの数
  prevArrow: $('.approach01-slick-prev'),
  nextArrow: $('.approach01-slick-next')
});
$('#approach02_slider').slick({
  autoplay: true, //自動でスクロール
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  dots: false,
  slidesToShow: 1, //表示するスライドの数
  prevArrow: $('.approach02-slick-prev'),
  nextArrow: $('.approach02-slick-next')
});
$('#approach03_slider').slick({
  autoplay: true, //自動でスクロール
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  dots: false,
  slidesToShow: 1, //表示するスライドの数
  prevArrow: $('.approach03-slick-prev'),
  nextArrow: $('.approach03-slick-next')
});
$('#approach04_slider').slick({
  autoplay: true, //自動でスクロール
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  dots: false,
  slidesToShow: 1, //表示するスライドの数
  prevArrow: $('.approach04-slick-prev'),
  nextArrow: $('.approach04-slick-next')
});
$('#approach04_1_slider').slick({
  autoplay: true, //自動でスクロール
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  dots: false,
  slidesToShow: 1, //表示するスライドの数
  prevArrow: $('.approach04_1-slick-prev'),
  nextArrow: $('.approach04_1-slick-next')
});
$('#approach05_slider').slick({
  autoplay: true, //自動でスクロール
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  dots: false,
  slidesToShow: 1, //表示するスライドの数
  prevArrow: $('.approach05-slick-prev'),
  nextArrow: $('.approach05-slick-next')
});
$('#program_slider').slick({
  autoplay: true, //自動でスクロール
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  dots: false,
  slidesToShow: 1, //表示するスライドの数
  prevArrow: $('.program-slick-prev'),
  nextArrow: $('.program-slick-next')
});

$('.campaignSlider').slick({
  autoplay: false, //自動でスクロール
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  dots: true,
  slidesToShow: 1, //表示するスライドの数
  prevArrow: $('.slick-prev'),
  nextArrow: $('.slick-next')
});


//アコーディオンをクリックした時の動作
$('.faq_ttl').on('click', function () { //タイトル要素をクリックしたら
  var findElm = $(this).next(".faq_info"); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作

  if ($(this).hasClass('close')) { //タイトル要素にクラス名closeがあれば
    $(this).removeClass('close'); //クラス名を除去し
  } else { //それ以外は
    $(this).addClass('close'); //クラス名closeを付与
  }
});

//アコーディオンをクリックした時の動作
$('#program_ttl05').on('click', function () { //タイトル要素をクリックしたら
  var findElm = $(this).next("#program_after"); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作

  if ($(this).hasClass('close')) { //タイトル要素にクラス名closeがあれば
    $(this).removeClass('close'); //クラス名を除去し
  } else { //それ以外は
    $(this).addClass('close'); //クラス名closeを付与
  }
});

//アコーディオンをクリックした時の動作
$('#approach_more01').on('click', function () { //タイトル要素をクリックしたら
  var findElm = $(this).prev("#approach_after01"); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作

  if ($(this).hasClass('close')) { //タイトル要素にクラス名closeがあれば
    $(this).removeClass('close'); //クラス名を除去し
  } else { //それ以外は
    $(this).addClass('close'); //クラス名closeを付与
  }
});
//アコーディオンをクリックした時の動作
$('#approach_more02').on('click', function () { //タイトル要素をクリックしたら
  var findElm = $(this).prev("#approach_after02"); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作

  if ($(this).hasClass('close')) { //タイトル要素にクラス名closeがあれば
    $(this).removeClass('close'); //クラス名を除去し
  } else { //それ以外は
    $(this).addClass('close'); //クラス名closeを付与
  }
});
//アコーディオンをクリックした時の動作
$('#approach_more03').on('click', function () { //タイトル要素をクリックしたら
  var findElm = $(this).prev("#approach_after03"); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作

  if ($(this).hasClass('close')) { //タイトル要素にクラス名closeがあれば
    $(this).removeClass('close'); //クラス名を除去し
  } else { //それ以外は
    $(this).addClass('close'); //クラス名closeを付与
  }
});


window.addEventListener("scroll", function () {
  const elm = document.querySelector("#conversion");
  const scroll = window.pageYOffset;
  if (scroll > 300) {
    elm.style.opacity = "1";
    // console.log(scroll);
  } else {
    elm.style.opacity = "0";
    // console.log(scroll);
  }
});

/* Formエリアに入ったらconversionを消す */
// $(function() {
//   var fixContact = $('#conversion');
//   $(window).bind("scroll", function() {
//     scrollHeight = $(document).height();
//     scrollPosition = $(window).height() + $(window).scrollTop();
//     if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.01) {
//             fixContact.fadeOut();
//     } else {
//             fixContact.fadeIn();
//     }
//   });
// });