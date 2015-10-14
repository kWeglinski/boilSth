$(document).ready(function () {
    setInterval(
        function () {
            $('.counter-zeropos').removeClass('counter-zeropos');
        }, 600);

    if ($('.users-anim')) {
        wh = $('.users-anim').width();
        nh = ($('.users-anim').width() / 770) * 232;
        $('.users-anim').height(nh);
    }
});

$(window).resize(function () {
    if ($('.users-anim')) {
        wh = $('.users-anim').width();
        nh = ($('.users-anim').width() / 770) * 232;
        $('.users-anim').height(nh);
    }
});
