if($(".cofslid").length) {
    $(".cofslid").on('init', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $(".cofslid__activeslid").empty().append("<span>" + i + "</span>" + '<b>/</b>' + "<em>" + slick.slideCount + "</em>");
    });
    
    var cofslid = $(".cofslid").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    cofslid.on('reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $(".cofslid__activeslid").empty().append("<span>" + i + "</span>" + '<b>/</b>' + "<em>" + slick.slideCount + "</em>");
    });

    $(".cofslid__arrow-next").click(function() {
        cofslid.slick("slickNext");
    });
    
    $(".cofslid__arrow-prev").click(function() {
        cofslid.slick("slickPrev");
    });
}