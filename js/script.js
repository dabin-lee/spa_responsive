$(function(){
    $('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

    // section--team
    var $maNagerLi = $('.tiles > li.team__manager'),
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
                    _thisLi = _this.closest('li.team__manager'); //가까운 li가
                    // console.log($off_SnsBtn);
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
            $arrowBox = $('.slider__arrow-inner'),
            $prevArrow = $arrowBox.find('.slider__arrow-btn--prev'),
            $nextArrow = $arrowBox.find('.slider__arrow-btn--next'),
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
						cnt = ind_-1;
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
                    console.log('pre');
                    prevSlide();
                }
            })
            $nextArrow.on({
                click : function(){
                    console.log('nex');
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

    // header = navbar
    var clkbtn = false; //클릭안한 초기값
    $('.gnb__button').on({
        click : function(){
            menuBarClickFn();
        },
        focusin: function(){
            menuBarClickFn();
        }
    });

    // 햄버거메뉴 리스트
    function menuBarClickFn(){
        if( clkbtn === false) {
            clkbtn = true; //클릭한 상태로 true변환
            $('.nav__bar--mo').stop().animate({opacity:1},0,function(e){
                $(this).stop().animate({left : 0}, 500);
                // e.stopPropagation();
            })
            $('.nav__btn-wrap').addClass('nav__btn-x');
            console.log(clkbtn);
        }
        else if( clkbtn == true ){
            clkbtn = false;
            console.log(clkbtn);
            $('.nav__btn-wrap').removeClass('nav__btn-x');
            $('.nav__bar--mo').stop().animate({left : 100 +'%'}, 500, function(){
                $(this).stop().animate({opacity : 0},0);
            })
        }
    }

    // 딤bg 클릭했을 때 animation
    function navBarDemmedFn(){
        $('.gnb--dimmed').on({
            click : function(){
                $('.nav__btn-wrap').removeClass('nav__btn-x');
                $('.nav__bar--mo').stop().animate({left : 100 +'%'}, 500, function(){
                    $(this).stop().animate({opacity : 0},0);
                })
            }
        })
    }
    navBarDemmedFn();


    // nav__bar focus_on/out 될 때
    var lastNaVbar = $('.nav__bar--mo').find('li').last();
        lastNaVbar.on("focusout", function(){
            $('.nav__bar--mo').stop().animate({left : 100 +'%'}, 500, function(){
            $(this).stop().animate({opacity : 0},0);
            })
        });


    var winW = $(window).innerWidth();
    if( winW <= 767 ){
        $('.feature__cont').find('li').height( $('.feature__cont').find('li').width() * 0.83 );
    }


    // swipe
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 5, //슬라이드 간격
        allowTouchMove: false,
        loop: false,
        slidesPerView: 4, //동시에 보여줄 슬라이드 개수
        slidesPerGroup : 4, //그룹으로 묶을 수
        initialSlide:1,
        breakpoints: {
            767: {
                allowTouchMove : true, //드래그 방지
                loop: true, // 무한 반복
                slidesPerView: 3.12, //동시에 보여줄 슬라이드 개수
                slidesPerGroup : 1.45, //그룹으로 묶을 수
                initialSlide:1.2,
                centeredSlides: true //가운데 정렬
            },
        }
    })
});