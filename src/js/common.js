!(function ($) {
    $(window).scroll(function () {
        var ws = $(window).scrollTop();
        $('.scroll').each(function () {
            var t = $(this);
            var isScroll = (t.offset().top - ws <= $(window).height() / 1.2);
            if (isScroll) {
                $(this).addClass('active').removeClass('scroll');
            }
        });
        // $('.slider').css("top",$(document).height()-ws*1-50);
        if (ws > ($(window).height() / 2)) {
            $('.slider .back').show(0);
        } else {
            $('.slider .back').hide(0);
        }

    }).trigger("scroll");

    $(document).on('click', '.back', function () {
        $('html,body').animate({
            scrollTop: '0px'
        }, 800);
    });

    $(document).on('mouseenter', '.edit', function () {
        $(this).children().show();
    }).on('mouseleave', '.edit', function () {
        $(this).children().hide();
    });

})(jQuery);

function showBook(e) {
    $('.layer').show();
}
var fnzx = function () {
    $('html,body').animate({scrollTop:$('.banner-plan').offset().top},800);
}
$(document).on("click", '.layer-bg,button.close', function () {
    $('.layer').hide();
});
