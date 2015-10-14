var goSticky = {
    stickyCategory: function (elem) {
        var scroll = $(window).scrollTop(),
            toppos = $(elem).position().top + $(elem).height() - 100;
        if (toppos <= scroll) {
            if ($('.sticky-top').length === 0) {
                $(elem).clone().addClass('fixed sticky-top').insertAfter(elem).animate({
                    top: '0'
                }, function () { //callback
                });
            }
        } else {
            $(elem + '.fixed').animate({
                top: '-100'
            }, function () {

                $(elem + '.fixed').remove();
            });
        }
    }

};
$(document).ready(function () {
    //sticky-top
    if ($('#sticky').length > 0) {
        goSticky.stickyCategory('#sticky');
        $(window).scroll(function (event) {
            goSticky.stickyCategory('#sticky');
        });
    }
});
