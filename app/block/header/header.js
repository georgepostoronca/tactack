$(".headslider").on("init", function() {
    $(".headslider-dots .slick-dots li").each(function(index, item) {
        console.log(index, item);
        if(index + 1 < 10) {
            $(item).find("button").append("<span>0" + (index + 1) + "</span>")
        } else {
            $(item).find("button").append("<span>" + (index + 1) + "</span>")
        }

    });
});

var headSlider = $(".headslider").slick({
    loop: true,
    arrows: false,
    appendDots: $(".headslider-dots"),
    dots: true
});

$(".headslider__arrow-next").click(function() {
    headSlider.slick("slickNext");
});

$(".headslider__arrow-prev").click(function() {
    headSlider.slick("slickPrev");
});