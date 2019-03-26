$(document).ready(function () {

    scrollLink = $('.scroll');

    scrollLink.click(function (event) {

        event.preventDefault();

        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

})