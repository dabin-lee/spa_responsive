$(function(){
    var winH = $(window).innerHeight();

    //jQuery
    $(window).resize(function(){

        // header = navbar
        var clkbtn = false;
        $('.gnb-menu__bar').on({
            click : function(){
                menuBarClickFn();
            }
        });

        // 햄버거메뉴 리스트
        function menuBarClickFn(){
            if( clkbtn === false) {
                clkbtn = true;
                $('.navbar--on').stop().animate({opacity:1},0,function(){
                    $(this).stop().animate({left : 0}, 500);
                })
                $('.gnb-menu__bar').addClass('addClosebar');
                console.log(clkbtn);
            }else if( clkbtn == true ){
                clkbtn = false;
                console.log(clkbtn);
                $('.gnb-menu__bar').removeClass('addClosebar');
                $('.navbar--on').stop().animate({left : 100 +'%'}, 500, function(){
                    $(this).stop().animate({opacity : 0},0);
                })
            }
        }


        // TouchSwipe - section--feature
        var $feaTureCont = $('.feature__cont'),
            $feaTureContUl = $feaTureCont.find('ul'),
            $feaTureContLi = $feaTureContUl.find('li').length;
        var Cnt = 0,
            setId = 0;

        // console.log($feaTureContLi);

        $feaTureCont.swipe({
            swipeLeft: function(left){
                Cnt++;
                if(Cnt>3){Cnt = 0}
                $feaTureContUl.css({left :-483*Cnt});
                console.log(Cnt);
            },
            swipeRight : function(right){
                Cnt--;
                if(Cnt<0){Cnt = 3;}
                $feaTureContUl.css({left :-483*Cnt});
                console.log(Cnt);
            }
        })


        // 4.section--service
        var winW = $(window).innerWidth();
        if( winW <= 767 ){
            $('.section--service .service__cont .text-wrap .tiles__list--btn').height( $('.tiles__list--btn').width() * 0.276 );
        }




        // 2.section--about
        var winW = $(window).innerWidth();
        if( winW <= 767 ){
            $('.feature__cont').find('li').height( $(this).width() * 1.2 );
        }

        // 4.section--service
        var winW = $(window).innerWidth();
        if( winW > 767 ){
            $('.section--service .service__cont .text-wrap .tiles__list--btn').height( $('.tiles__list--btn').width() * 0.276 );
        }

        // 5. section--testimonials
        var tesTimonials = $('.section--testimonials .indicator--article').width(),
            sec5H = $('.section--testimonials').height();
            $('.section--testimonials .indicator--article').height( tesTimonials * 0.3746);
            $('.section--testimonials .indicator--article').css({backgroundPositionY : (winH-sec5H)/2});

        // 6. section--Team
        var memBersnsBtn = $('.on .btn__sns > ul > li').width();
            $('.on .btn__sns > ul > li').height( memBersnsBtn * 1.5 );

        // 7. section--reserved
        var reservedBtnW = $('.reserved__cont > form > .btn__primary--pink').width();
            $('.reserved__cont > form > .btn__primary--pink').height( reservedBtnW * 0.25 );



        // 8. section--blog
        var secBlog = $('.blog__cont > article').width(),
            BlogImgW = $('.article__blog--tiles .summary--img').width();

            $('.blog__cont > .article__blog--tiles').height( secBlog * 0.981);
            $('.article__blog--tiles .summary--img').height( BlogImgW * 0.981);
            if( winW > 767 ){$('.article__blog--tiles button.btn__primary').height( secBlog * 0.316);}

        // 9. section--contact
        var visitInputW = $('.visit--form > input').width();
            $('.visit--form .input--board').css({height: visitInputW * 0.2707 });

        // 10. footer .footer__logo
        var footerLogoW =  $('.footer__logo').width();
            $('.footer__logo').css({height: footerLogoW * 0.72});

        // common - button
        var btnrESERVE = $('.banner__summary--play');
        var btnPrimary = $('.btn__primary');
        var btnW1 = btnrESERVE.width();
        var btnW2 = btnPrimary.width();

            $('.banner__summary--play').height( btnW1 *0.277 );
            $('.banner__summary--play .btn--play').height( btnW1 *0.29 );
                btnPrimary.height( btnW2 *0.2941 );
                btnPrimary.height( btnW2 *0.2941 );


            function summaryButton(){
                winW = $(window).innerWidth();
                if( winW > 767 ){
                    $('.banner__summary--play').height('50px');
                    $('.section--testimonials .indicator--article').css({backgroundPositionY : (winH-sec5H)/2.5});
                }
            }

        //common - tiles
        $('.tiles__list--btn').height( $('.tiles__list--btn').width() * 0.2941 );

    });

});