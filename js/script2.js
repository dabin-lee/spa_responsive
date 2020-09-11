$(function(){

    // section--team
    var $maNagerLi = $('.tiles > li.team__manager'),
        $tabList = $('.tablist'),
        $Tab = $tabList.find('> a');

        // 마우스 오버, 포커스 인
        $maNagerLi.on({
            mouseenter:	function(){
                $(this).addClass('on');
                $Tab.focus()
                $tabList.find('li').eq().attr('tabIndexecutive--name', 0);
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
                    _thisLi = _this.closest('li.team__manager'); //가까운 li가
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
            $slideGroup = $('.testimonials__cont'),
            $slides = $slideGroup.find('> .article__testimonials'),
            $duration = 500,
            $easing = 'easeInOutExpo',
            $arrowBox = $('.slide__wrap'),
            $prevArrow = $arrowBox.find('.arrow--prevBtn'),
            $nextArrow = $arrowBox.find('.arrow--nextBtn'),
            $inDicatorBtn = $('.indicator__btn');

        var $pause = 0,
            $setId = 0,
            $rollBtnwrp = $('.slider__rolling--btn'),
            $rollBtnList = $rollBtnwrp.find('> .rolling--btn'),
            $rollBtnIndicator = $('.rolling--btn'),
            $rollBtnPlay = $('.indicator--play-pause');


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
                    $rollBtnIndicator.eq(cnt).addClass('is-play').siblings().removeClass('is-play');

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
                    $(this).addClass('is-play').siblings().removeClass('is-play');
                    cnt = rol-1;
                    goToslide();
                }
            })
        });


        // playFn
        function rollingPlayFn(){
            $setId = setInterval(nextSlide, 2000);
            $rollBtnPlay.removeClass('is-pause').find('span').html('Play');
        }


        // pauseFn
        function rollingPauseFn(){
            clearInterval($setId);
            $rollBtnPlay.addClass('is-pause').find('span').html('Stop');
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

        winW = $(window).innerWidth();
        // header = navbar
        var clkbtn = false;
        $('.gnb__button').on({
            click : function(){
                menuBarClickFn();
            }
        });

        // 햄버거메뉴 리스트
        function menuBarClickFn(){
            if( clkbtn === false) {
                clkbtn = true;
                $('.nav__bar--on').stop().animate({opacity:1},0,function(){
                    $(this).stop().animate({left : 0}, 500);
                })
                $('.gnb__button').addClass('addClosebar');
                console.log(clkbtn);
            }else if( clkbtn == true ){
                clkbtn = false;
                console.log(clkbtn);
                $('.gnb__button').removeClass('addClosebar');
                $('.nav__bar--on').stop().animate({left : 100 +'%'}, 500, function(){
                    $(this).stop().animate({opacity : 0},0);
                })
            }
        }

        // swiper
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            initialSlide: 1,
            roundLengths: true,
            allowTouchMove: false,
            slidesOffsetBefore: 1.5, // 컨테이너 시작 부분 (모든 슬라이드 이전)에 슬라이드 오프셋 추가 (픽셀 단위)


            //반응형
            breakpointsInverse: false,
            breakpoints: {
                1530: {
                    spaceBetween: 0,
                    allowTouchMove: false,
                },
                768:{
                    spaceBetween: 0,
                    allowTouchMove: false,
                },
                767: {
                    spaceBetween: 5,
                    slidesPerView: 1.45,
                    initialSlide:1.2,
                    loop: true,
                    centeredSlides: true,
                    allowTouchMove: true,
                }
            }
        });

            // 5. testimonials
            var tesTimonials = $('.testimonials .article__testimonials').width(),
                sec5H = $('.testimonials').height();
                $('.testimonials .article__testimonials').height( tesTimonials * 0.3746);
                $('.testimonials .article__testimonials').css({backgroundPositionY : (winH-sec5H)/2});

            // 6. team
            var memBersnsBtn = $('.on .btn__sns > ul').width();
                $('.on .btn__sns > ul').height( memBersnsBtn * 0.19 );

            // 7. reserved__wrap
            var reservedBtnW = $('.reserved__cont > form > .btn__primary--pink').width();
                $('.reserved__cont > form > .btn__primary--pink').height( reservedBtnW * 0.25 );
                if(winW <= 767){
                    $('.reserved__cont > form > .btn__primary--pink').height( 200 * 0.25 );
                }

            // 8. section--blog
            // var secBlog = $('.blog__cont > article').width(),
            //     BlogImgW = $('.article__blog-tiles .article_img').width();

            //     $('.blog__cont > .article__blog-tiles').height( secBlog * 0.981);
            //     $('.article__blog-tiles .article_img').height( BlogImgW * 0.981);

            // 9. section--contact
            var visitInputW = $('.contact__form > input').width();
                $('.contact__form .input--board').css({height: visitInputW * 0.2707 });

            // 10. footer .footer__logo
            var footerLogoW =  $('.footer__logo').width();
                $('.footer__logo').css({height: footerLogoW * 0.72});

            // common - button
            var btnrESERVE = $('.banner__btn-play');
            var btnPrimary = $('.btn__primary');
            var btnW1 = btnrESERVE.width();
            var btnW2 = btnPrimary.width();
                btnPrimary.height( btnW2 *0.2941 );
                btnPrimary.height( btnW2 *0.2941 );

             //common - tiles
            $('.tiles__btn-list').height( $('.tiles__btn-list').width() * 0.2941 );


        if( winW <= 767 ){
            $('.service .service__cont .text-wrap .tiles__btn-list').height( $('.tiles__btn-list').width() * 0.276 );
            // $('.article__blog-tiles button.btn__primary').height( secBlog * 0.316);}
            $('.banner__btn-play').height('50px');
            // $('.testimonials .article__testimonials').css({backgroundPositionY : (winH-sec5H)/2.5});
        };

        });
    }); //반응형
