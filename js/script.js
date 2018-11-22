$(function () {
    $('.inside-hover').mouseover(function () {
       $('.inside-hover').addClass('onhover');
       $('.text-btn').addClass('onhover1');
    });
    $('.inside-hover').mouseout(function () {
        $('.inside-hover').removeClass('onhover');
        $('.text-btn').removeClass('onhover1');
    });
});