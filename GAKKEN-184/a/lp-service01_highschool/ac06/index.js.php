<script src="https://ajaxzip3.github.io/ajaxzip3.js"></script>
<script>


$(document).on('change','[name="zipcode"]',function(){
///

AjaxZip3.zip2addr('zipcode', '','pref','address');

///
});




<?php
if(isset($_POST['token'])):
?>




$(function(){
///

location.href='#form';

///
});
<?php
endif;
?>



$(document).on('click','button.confirm',function(){
///

if($('#tmp_x').prop('name')!='confirm_x'){
$('#tmp_x').prop('name','confirm_x');
$('#tmp_x').closest('form').submit();
}

///
});



$(document).on('click','button.back',function(){
///
$(this).closest('form').submit();
///
});




$(document).on('click','button.fin',function(){
///

if($('#tmp_x').prop('name')!='send_btn_x'){
$('#tmp_x').prop('name','send_btn_x');
$('#tmp_x').closest('form').submit();
}

///
});







/*
$(document).on('change','[name="hope_title\\[\\]"]',function(){
///

if($('[name="hope_title\\[\\]"]:checked').length){
$('[name="hope_title\\[\\]"]').closest('dd').removeClass('error');
}else{
$('[name="hope_title\\[\\]"]').closest('dd').addClass('error');
}

///
});








$('form').submit(function(){
///

if(!($('[name="hope_title\\[\\]"]:checked').length)){
    $('html,body').animate({ scrollTop:$('#fmcate1_0').offset().top }, 800);
}

return false;

///
});
*/



</script>




