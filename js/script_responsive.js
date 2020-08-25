$(function(){

    var winH = $(window).innerHeight();
    // console.log(winH);

    //jQuery
    $(window).resize(function(){
    // 1. section--banner


        // 2. section--about

        var secAboutBgImgH = ( winH - $('.section--about').height() / 2 );
        console.log(secAboutBgImgH);
        // 3. section--feature



        // 4.section--service



        // 5. section--testimonials

        var tesTimonials = $('.section--testimonials .indicator--article').width(),
            sec5H = $('.section--testimonials').height();
            $('.section--testimonials .indicator--article').height( tesTimonials * 0.3746);
            $('.section--testimonials .indicator--article').css({backgroundPositionY : (winH-sec5H)/2});




        // 6. section--Team
        var memBersnsBtn = $('.on .btn__sns > ul > li').width();
            $('.on .btn__sns > ul > li').height( memBersnsBtn * 1.5 );
            // $('.btn__sns > ul > li').height( memBersnsBtn * 1.5 );s

        // 7. section--reserved
        var reservedBtnW = $('.reserved__cont > form > .btn__primary--pink').width();
        $('.reserved__cont > form > .btn__primary--pink').height( reservedBtnW * 0.25 );

        console.log(reservedBtnW);


        // 8. section--blog
        var secBlog = $('.blog__cont > article').width(),
            BlogImgW = $('.article__blog--tiles .summary--img').width();

            // $('.blog__cont > article').height( secBlog * 1.6944);
            $('.blog__cont > .article__blog--tiles').height( secBlog * 0.981);
            $('.article__blog--tiles .summary--img').height( BlogImgW * 0.981);


        // 9. section--contact
        var visitLi = $('.visit--info').height(),
            visitH3 = $('.visit--info > li > h3'),
            visith3W = visitH3.width(),
            visith3H = visitH3.height();
            visitInputW = $('.visit--form > input').width();


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

        // $('.summary--img').height( $('.summary--img').width()*0.825 );
        $('.tiles__list--btn').height( $('.tiles__list--btn').width() * 0.2941 );



    });




    /*

    //jQuery
        $(window).resize(function(){
            var winWidth = $(window).width();
            var boxWidth = $('.box').width();
            //max-width값인 500px아래서만 작동
            if(winWidth <= 500){
                //1.681:1
                $('.box').height(boxWidth*0.681);
            }
        });
    */
});