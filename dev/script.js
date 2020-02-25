$(".row-item a").click(function(){
  if($(window).width() > 560){
    if ($(this).parent().is("#home")){
      $(".content").css("width", "100vw");
    }
    else {
      $(".content").css("width", "10em");
    }
  }
});
