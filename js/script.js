$(function () {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if(height > 150){
            $('.arrow-top').fadeIn(200);
            $('.logo').addClass('animated fadeOutUp');
        }else{
            $('.arrow-top').fadeOut(200);
            $('.logo').removeClass('animated fadeOutUp');

        }
    });
    $('.arrow-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0},'slow');
        return false
    });
    function animateBlocks() {
        function firstBlock(){
            $(window).scroll(function () {
                var scrTop =$(window).scrollTop();
                if (scrTop > $('.first-block').offset().top - $(window).height()){
                    $('.img1').addClass('animated fadeInRight');
                    $('.img2').addClass('animated fadeInRight');
                    $('.img4').addClass('animated fadeInLeft');
                    $('.img5').addClass('animated fadeInLeft');
                }
            });

        }
        function thirdBlock(){
            $(window).scroll(function () {
                var scrTop =$(window).scrollTop();
                if (scrTop > $('.third-imgwrap').offset().top - $(window).height()){
                    $('.third-img1').addClass('animated fadeInUp');
                    $('.third-img2').addClass('animated fadeInRight');
                    $('.third-img3').addClass('animated fadeInLeft');
                }
            });
        }
        function forthBlock(){
            $(window).scroll(function () {
                var scrTop = $(window).scrollTop();
                if (scrTop > $('.forth-block').offset().top - $(window).height()){
                    $('.forth-img1').addClass('animated fadeInLeft');
                    $('.forth-img2').addClass('animated fadeInUp');
                    $('.forth-img3').addClass('animated fadeInUp');
                    $('.forth-img4').addClass('animated fadeInUp');
                    $('.forth-img5').addClass('animated fadeInRight');
                }
            });
        }
        function fithBlock(){
            $(window).scroll(function () {
                var scrTop = $(window).scrollTop();
                if(scrTop > $('.fith-imgwrap').offset().top - $(window).height()){
                    $('.fith-img1').addClass('animated fadeInUp');
                    $('.fith-img2').addClass('animated fadeInUp');
                    $('.fith-img3').addClass('animated fadeInUp');
                    $('.fith-img4').addClass('animated fadeInUp');
                }
            });
        }
        function sevenBlock(){
            $(window).scroll(function () {
                var scrTop = $(window).scrollTop();
                if(scrTop > $('.seven-block').offset().top - $(window).height()){
                    $('.seven-text').addClass('animated fadeInUp');
                    $('.seven-imgwrap').addClass('animated fadeInRight');
                }
            });
        }
        function eightBlock(){
            $(window).scroll(function () {
                var scrTop = $(window).scrollTop();
                if(scrTop > $('.eight-block').offset().top - $(window).height()){
                    $('.section1').addClass('animated fadeInLeft');
                    $('.section2').addClass('animated fadeInLeft');
                    $('.section3').addClass('animated fadeInLeft');
                    $('.section4').addClass('animated fadeInLeft');
                }
            });
        }
        firstBlock();
        thirdBlock();
        forthBlock();
        fithBlock();
        sevenBlock();
        eightBlock()
    }
animateBlocks();

























        














});