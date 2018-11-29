$(function () {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if(height > 150){
            $('.arrow-top').fadeIn(200);
            $('.logo').fadeOut(100);
            $('.logo').css('padding-left','0px');
            $('.navi-bar ul').css('width','100%');
            $('.navi-bar ul').css('padding-top','0px');
        }else {
            $('.arrow-top').fadeOut(200);
            $('.logo').fadeIn(100);
            $('.logo').css('padding-left','119px');
            $('.navi-bar ul').css('width','75%');
        }
    });
    $('.arrow-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0},'slow');
        return false
    });

    var firstBlock = $('.img1');
    var pos = firstBlock.position();
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top & windowpos <= 1000){
            $('.img1').addClass('animated fadeInRight');
            $('.img2').addClass('animated fadeInRight');
            $('.img4').addClass('animated fadeInLeft');
            $('.img5').addClass('animated fadeInLeft');
        }
    });












/*
    function myFunction() {
       // if (document.body.scrollTop > 633 || document.documentElement.scrollTop > 633)
        if (document.body.scrollTop === 633 || document.documentElement.scrollTop > 633) {
            $('.img1').addClass('animated fadeInRight');
            $('.img2').addClass('animated fadeInRight');
            $('.img4').addClass('animated fadeInLeft');
            $('.img5').addClass('animated fadeInLeft');
        } else {
            $('.img1').removeClass('animated fadeInRight');
            $('.img2').removeClass('animated fadeInRight');
            $('.img4').removeClass('animated fadeInLeft');
            $('.img5').removeClass('animated fadeInLeft');
        }
    }

*/











        














});