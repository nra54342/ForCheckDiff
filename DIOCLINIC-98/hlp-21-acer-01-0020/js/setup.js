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
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  slidesToShow: 1, //表示するスライドの数
  dots: true, //スライドしたのドット
  centerMode: true,
  variableWidth: true,
});
$('#approach01_slider').slick({
  autoplay: true, //自動でスクロール
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  slidesToShow: 1, //表示するスライドの数
  centerMode: true,
  variableWidth: true,
});
$('#approach02_slider').slick({
  autoplay: true, //自動でスクロール
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  slidesToShow: 1, //表示するスライドの数
  centerMode: true,
  variableWidth: true,
});
$('#approach03_slider').slick({
  autoplay: true, //自動でスクロール
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  slidesToShow: 1, //表示するスライドの数
  centerMode: true,
  variableWidth: true,
});
$('#approach04_slider').slick({
  autoplay: true, //自動でスクロール
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  slidesToShow: 1, //表示するスライドの数
  centerMode: true,
  variableWidth: true,
});
$('#approach05_slider').slick({
  autoplay: true, //自動でスクロール
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  slidesToShow: 1, //表示するスライドの数
  centerMode: true,
  variableWidth: true,
});
$('#program_slider').slick({
  autoplay: true, //自動でスクロール
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300, //スライドが流れる速度を設定
  slidesToShow: 1, //表示するスライドの数
  centerMode: true,
  variableWidth: true,
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