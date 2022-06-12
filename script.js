$('a').click(function (e) {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
});