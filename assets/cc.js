function detectHeader() {
  if(window.pageYOffset > 0 && $(window).scrollTop() + $(window).height() < $(document).height() - 10) {
    if(window.pageYOffset < window.innerHeight -10) {
      $("header").css("opacity", (100 - window.pageYOffset)/100);
      $("header").css("background-color", "#1cac6d00");
    }else{
      $("header").css("opacity", 1);
      $("header").css("background-color", "#1cac6dff");
    }
  }else{
    $("header").css("opacity", 1);
    $("header").css("background-color", "#1cac6d00");
  }
}

$(document).ready(function(){
  detectHeader();
  $(window).scroll(function(){
    detectHeader();
  })
  $('a[href="#what"]').click(function(){
    $("html, body").animate({scrollTop: window.innerHeight},1000);
  })
  $('#doreg').click(function(){
    $('.plegde').hide();
    $('.thanks').show();
  })
  $('#pwd').on("keypress",function(e){
    if(e.keyCode == 13) {
      $('#d1').hide();
      $('#d2').show();
    }
  })  
  $('#get').click(function(){
    $('#d2').hide();
    $('#d3').show();
  })
})