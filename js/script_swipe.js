$(function(){
    //jQuery
    $(window).resize(function(){

            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 4,  //한번에 보여지는 슬라이드 개수
                initialSlide: 1, //시작 슬라이드
                // centeredSlides: true, //가운데정렬
                roundLengths: true,	//일반 해상도 화면에서 텍스트가 흐려지는 것을 방지하기 위해 슬라이드 너비와 높이 값을 반올림
                allowTouchMove: true,
                slidesOffsetBefore: 0, // 컨테이너 시작 부분 (모든 슬라이드 이전)에 슬라이드 오프셋 추가 (픽셀 단위)


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
                        // initialSlide: 1,
                        // spaceBetween: 0,
                        // loop: true, //무한루프
                        // centeredSlides:1,  //활성 슬라이드가 왼쪽 또는 가운데 배치 (1,0,true,false)
                        // slidesPerView: 2,  // 한번에 보이는 슬라이드 갯수. 반응형 및 다양한 디자인은 auto가 나음.
                        spaceBetween: 5,
                        slidesPerView: 1.45,   //화면에보여질 갯수
                        initialSlide:1.2,  //활성화된 슬라이드
                        loop: true,  //루핑 즉 로테이션
                        centeredSlides: true, // true 인 경우 활성 슬라이드는 항상 왼쪽이 아닌 가운데에 배치됩니다.
                    }
                }
            });
    });

});