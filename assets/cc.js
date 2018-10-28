function detectHeader() {
  if(window.pageYOffset > 0 && $(window).scrollTop() + $(window).height() < $(document).height()) {
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
})