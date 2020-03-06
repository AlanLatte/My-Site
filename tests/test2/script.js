var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        TweenMax.set(follower, {
            css: {
                left: posX - 10,
                top: posY - 10
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});


$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;

});

$(".portfolio-image img").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});

$(".portfolio-image img").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});
