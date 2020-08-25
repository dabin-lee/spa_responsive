$(function(){



        // var winW = $(window).width();
        // var winH = $(window).height();
        // var inwinW = $(window).innerWidth();
        // var textW = $('.text-wrap').innerWidth();
        // var fonZ = $(window)
        // console.log(winW);
        // console.log(winH);
        // console.log(textW);

        var winWidth = $(window).width();
        var boxWidth = $('.tiles > article').width();
        var secAbout = $('.section--about');
        var txtWrp   = $('.service__cont .text_wrap').innerWidth();



        //jQuery
        $(window).resize(function(){

            // header - nav
            // $('header::after').css({ height: });


            // 1. section--banner
            var flowerImg = $('.section--banner').width();

            // 2. section--about


            $('.butterfly').before().on({
                click : function(){
                    console.log('hi');
                }
            })

            // 3. section--feature
            // var secFea = $('.section--feature');
            // var feaContLi = secFea.find('.feature__cont > ul > li').width();
            // var feaContLi = secFea.find('.feature__cont > ul > li').width();
                var tesTimonials = $('.section--testimonials .indicator--article').width();


            // // 3. section--feature
            // $('.tiles > article').height(boxWidth * 1.611);


            // 4.section--service


            // 4. section--blog
            var secBlog = $('.blog__cont > article').width(),
                BlogImgW = $('.article__blog--tiles > .summary--img').width();

                $('.blog__cont > article').height( secBlog * 1.6944);
                $('.blog__cont > .article__blog--tiles').height( secBlog * 0.981);
                $('.article__blog--tiles > .summary--img').height( BlogImgW * 0.981);


            // 5. section--testimonials
            $('.section--testimonials .indicator--article').height( tesTimonials*0.3746);
            $('.slider__indicator--btn > li').height($('.slider__indicator--btn > li').width() * 1);

            // 6. section--Team
            // $('.')



            // 9. section--contact
            var visitH3Icon = $('.visit--info > h3').width();
            var visitInputW = $('.visit--form > input').width();

            $('.visit--info > h3').css({height: visitH3Icon * 1});
            $('.visit--form > input').css({height: visitInputW * 0.0902 });
            $('.visit--form .input--board').css({height: visitInputW * 0.2707 });

            // 10. footer .footer__logo
            var footerLogoW =  $('.footer__logo').width();
            $('.footer__logo').css({height: footerLogoW * 0.72});


            // common - button

            var btnrESERVE = $('.btn--submit');
            var btnPrimary = $('.btn__primary');

            var btnW1 = btnrESERVE.width();
            var btnW2 = btnPrimary.width();

            $('.banner__summary--play').height( btnW1 *0.2941 );
            $('.banner__summary--play .btn--play').height( btnW1 *0.29 );
            btnPrimary.height( btnW2 *0.2941 );
            btnPrimary.height( btnW2 *0.2941 );


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