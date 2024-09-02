$( document ).ready(function() {
  var cr_date = new Date();
  var month = cr_date.getMonth() + 1;
  var lastDayOfMonth = new Date(cr_date.getFullYear(), cr_date.getMonth() + 1, 0);
  var targetElement = $(".gk77_01");
  // $(".gk77").append("<strong><b>期間限定<br>"+(cr_date.getMonth() + 1) +"</b><b>月</b><b>" + lastDayOfMonth.getDate() +"日<br>まで</b></strong>");
  
  // if month 1-9, gk77_01 will apply and month 10-12 add class gk77_02
  if ([10, 11, 12].includes(month)) {
    targetElement.addClass("gk77_02");
  }
  // targetElement.append("<strong><b>" + month + "</b></strong>");
});