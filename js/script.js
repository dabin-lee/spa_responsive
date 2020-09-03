$(function(){

    // section--team
    var $maNagerLi = $('.tiles > li.manager--profile'),
        $maNagerProfile = $maNagerLi.find(' > figcaption'),
        $tabList = $('.tablist'),
        $Tab = $tabList.find('> a');

        // 마우스 오버, 포커스 인
        $maNagerLi.on({
            mouseenter:	function(){
                $(this).addClass('on');
                $Tab.focus()
                $tabList.find('li').eq().attr('tabIndex', 0);
            },
            focus:	function(){  //키보드접근 focusin == focus    커보드 떠날 때 focusout == blur
                $(this).addClass('on');
                $Tab.focus();
            }
        });

        // 마우스 리브 , 포커스 리브
        $maNagerLi.on({
            mouseleave:	function(){
                $(this).removeClass('on');
                $(this).find('#tablist > li > a').attr('tabindex', 0);
            }
        });

        // article > a 에 focus가 될 때
        var $off_SnsBtn = $('.off');
        $off_SnsBtn.on("focusout", function(){
			var	_this = $(this),
                    _thisLi = _this.closest('li.manager--profile'); //가까운 li가
                    console.log($off_SnsBtn);
			if(_thisLi.hasClass('on') == true ){
				_thisLi.removeClass('on');
			}else{
				_thisLi.addClass('on');
			}
		});

    // section--testimonials
        var cnt = 0,
            idx = 0,
            $slideGroup = $('.article__group--testimonials'),
            $slides = $slideGroup.find('> .indicator--article'),
            $duration = 500,
            $easing = 'easeInOutExpo',
            $arrowBox = $('.slide__wrap'),
            $prevArrow = $arrowBox.find('.arrow--prevBtn'),
            $nextArrow = $arrowBox.find('.arrow--nextBtn'),
            $inDicatorBtn = $('.indicator--btn');

        var $pause = 0,
            $setId = 0,
            $rollBtnwrp = $('.slider__rolling--btn'),
            $rollBtnList = $rollBtnwrp.find('> .rolling--btn'),
            $rollBtnIndicator = $('.rolling--btn'),
            $rollBtnPlay = $('.rolling--play');


            //main slide
            function goToslide(){
                // console.log(cnt);
                curChk();

                    $slides.each(function(i){ // 각각 slide마다 css로 left값 바꿈
                        idx = i;
                        var newLeft = (i * 100) + '%';
                        $(this).css({left: newLeft});
                    });

                    $slideGroup.stop().animate({left: (- 100 * cnt) + '%'}, $duration, $easing);
                    $inDicatorBtn.eq(cnt).addClass('indicator--on').siblings().removeClass('indicator--on');
                    $rollBtnIndicator.eq(cnt).addClass('addClassBtn').siblings().removeClass('addClassBtn');

                }
                goToslide();


            //슬라이드 길이 조절
            function curChk(){
                // cnt >= $slides.length ? cnt = 0 : cnt = $slides.length-1

				if(cnt >= $slides.length){  // 슬라이드 길이보다 더 높을 때
					cnt = 0;
				}else if(cnt < 0){ // 0 보다 작을때
					cnt = $slides.length-1;
				}
			}

            //각각의 인디게이터
            $inDicatorBtn.each(function(e){
                var ind_ = $(this).index();
                // console.log(ind_);
                $(this).on({
                    click : function(){
						cnt = ind_;
                        goToslide();
                    }
                })
            });


            //슬라이드 pre, nex / btn
            function prevSlide(){
                cnt--;
                goToslide();

            }
            function nextSlide(){
                cnt++;
                goToslide();
            }
            $prevArrow.on({
                click : function(){
                    prevSlide();
                }
            })
            $nextArrow.on({
                click : function(){
                    nextSlide();
                }
            })

        //////////////////////////////////////////////////////////
        // 플레이인디게이터 버튼 클릭
        $rollBtnList.each(function(e){
            var rol = $(this).index();
            $(this).on({
                click : function(){
                    $(this).addClass('addClassBtn').siblings().removeClass('addClassBtn');
                    cnt = rol-1;
                    goToslide();
                }
            })
        });


        // playFn
        function rollingPlayFn(){
            $setId = setInterval(nextSlide, 2000);
            $rollBtnPlay.removeClass('addClassPlayPause').find('span').html('Play');
        }


        // pauseFn
        function rollingPauseFn(){
            clearInterval($setId);
            $rollBtnPlay.addClass('addClassPlayPause').find('span').html('Stop');
        }


        // autoTimer
        function autoPlayFn(){
            goToslide();
            rollingPlayFn()
        }
        autoPlayFn();


        // stop - 버튼
        $rollBtnPlay.on({
            click : function(){
                rollIngBtn();
            }
        });


        //플레이, 일시중지 버튼
        function rollIngBtn(){
            if( $pause == 0 ){ //play일때
                $pause = 1; //일시중지
                rollingPauseFn();
            }else{
                $pause = 0; //stop
                rollingPlayFn();
            }
        }


        // datepicker, timepicker
        $("#reserveDate").datepicker({});
        $('#timePicker').timepicker({
            timeFormat: 'p h:mm',
            interval: 60,
            minTime: '09',
            maxTime: '11:00pm',
            defaultTime: '14',
            startTime: '00:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true
        });


    var winH = $(window).innerHeight();
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
                if( winW = 767 ){$('.article__blog--tiles button.btn__primary').height( secBlog * 0.316);}

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
    }); //반응형
});
