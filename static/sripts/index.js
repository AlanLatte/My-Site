$(".content").css(
  { "justify-content" : "center" }
);

$(window).resize(function(){
  if ($(window).width() > 560){
    $(".content").css({
      "justify-content" : "center",
    });
  }
  else{
    $(".content").css({
      "justify-content" : "",
    });
  }
});

function desktop_normalize(){
  $(".content").css(
    {"font-size": "3vh"}
  );
  $(".row-item a").click(function(){
    if($(window).width() > 560){
      if ($(this).parent().is("#home")){
        $(".content").css( {
            "margin-bottom" : "10vh",
            "justify-content" : "center",
          });
        $(".menu").css("width", "");
        $("footer").show();
      }
      else {
        $(".menu").css({
          "width" : "10em",
          "font-size" : "3vh"
        });
        $(".content").css({
          "margin-bottom" : "0",
          "justify-content" : ""
        });
        $("footer").hide();
      }
    }
  });

}

if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())){
  $(".content").css(
    {"font-size": "35px"}
  );
} else{
  desktop_normalize();
}
