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


// 続きを読む
$(function() {
  $('#voice_btn01').click(function(){
      $('#voice_txt01').addClass('open');
      $('#voice_btn01,#fadeout01').hide();
  });
});
$(function() {
  $('#voice_btn02').click(function(){
      $('#voice_txt02').addClass('open');
      $('#voice_btn02,#fadeout02').hide();
  });
});
$(function() {
  $('#voice_btn03').click(function(){
      $('#voice_txt03').addClass('open');
      $('#voice_btn03,#fadeout03').hide();
  });
});
$(function() {
  $('#voice_btn04').click(function(){
      $('#voice_txt04').addClass('open');
      $('#voice_btn04,#fadeout04').hide();
  });
});
$(function() {
  $('#voice_btn05').click(function(){
      $('#voice_txt05').addClass('open');
      $('#voice_btn05,#fadeout05').hide();
  });
});
$(function() {
  $('#voice_btn06').click(function(){
      $('#voice_txt06').addClass('open');
      $('#voice_btn06,#fadeout06').hide();
  });
});

// アコーディオンメニューの設定
var coll = document.getElementsByClassName("collapse");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    }
    else 
    {
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
if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
  /* Formエリアに入ったらconversionを消す */
  $(window).scroll(function() {
    var scroll_len = $(window).scrollTop();
    var bottom_len = $("body").height() - $(window).height();
    if ( scroll_len > 700 && scroll_len < bottom_len - 2500) {
      $('#conversion').fadeIn();
    } else {
      $('#conversion').fadeOut();
    }
  });
}

//ここに書いた処理はスマホの時だけ有効
if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
  /* Formエリアに入ったらconversionを消す */
  $(window).scroll(function() {
    var scroll_len = $(window).scrollTop();
    var bottom_len = $("body").height() - $(window).height();
    if ( scroll_len > 550 && scroll_len < bottom_len - 1350) {
      $('#conversion').fadeIn();
    } else {
      $('#conversion').fadeOut();
    }
  });
}

// function goToSlick(number) {
//   $('#banner_box_2').slick('slickGoTo', number);
// }

$( document ).ready(function() {
    lightbox.option({
      'albumLabel': ""
    })

    $(".inline").colorbox({
      inline:true, 
      width:"100%"
    });

    $(".inline2").colorbox({
      inline:true, 
      width:"100%"
    });

    $(".inline3").colorbox({
      inline:true, 
      width:"100%"
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

$(".faq_btn").on('click', function(){
  $(".faq_btn").removeClass('active')
  $(this).addClass('active');
})