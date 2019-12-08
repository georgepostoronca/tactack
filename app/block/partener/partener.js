$(".partenter__slider").slick({
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 560,
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