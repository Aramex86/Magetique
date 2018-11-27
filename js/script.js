$(function () {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if(height > 150){
            $('.arrow-top').fadeIn(200);
        }else {
            $('.arrow-top').fadeOut(200);
        }
    });
    $('.arrow-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0},'slow');
        return false
    });
    $(window).scroll(function () {
        var headTop = $(window).scrollTop();
        if (headTop > 50){
            $('.logo').hide();
            $('.navi-bar ul').css('width','100%');
        }else {
            $('.logo').show();
            $('.navi-bar ul').css('width','75%');
        }

    });
        














});