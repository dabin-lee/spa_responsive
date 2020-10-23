10. footer sns type 추가
   시안에서
   Experienced Team 의 sns 버튼은 가로 세로가 30*30 고정이지만
   footer의 sns 같은 경우는 페이스북 7*14, 트위터 13*11, 인스타그램 13*14, 빙글 13*11로 다 다릅니다.

   [요청 사항]
   footer의 sns는 아래 3가지 type으로 만들어 주세요.
   type01) a태그의 사이즈 각 아이콘 사이즈별로 다른게 주기 ( 페이스북 7*14, 트위터 13*11, 인스타그램 13*14, 빙글 13*11),
           bg이미지 방식
   type02) a태그의 사이즈를 공통 최대값 13*14로 고정하고, 페이스북 마진 분기, 아이콘은 a 태그에 ::before 방식
   type03) a태그의 사이즈를 공통 최대값 13*14로 고정하고, 페이스북 마진 분기, 아이콘은 bg이미지 방식

   (참고) sns_sprite_ex.psd

   <ul class="footer--sns__type01">
                     <li class="facebook"><a href="#">facebook</a></li>
                     <li class="twitter"><a href="#">twitter</a></li>
                     <li class="instagram"><a href="#">instagram</a></li>
                     <li class="vingle"><a href="#">vingle</a></li>
           </ul>
           <ul class="footer--sns__type02">
                     <li class="facebook"><a href="#">facebook</a></li>
                     <li class="twitter"><a href="#">twitter</a></li>
                     <li class="instagram"><a href="#">instagram</a></li>
                     <li class="vingle"><a href="#">vingle</a></li>
           </ul>
           <ul class="footer--sns__type03>
                     <li class="facebook"><a href="#">facebook</a></li>
                     <li class="twitter"><a href="#">twitter</a></li>
                     <li class="instagram"><a href="#">instagram</a></li>
                     <li class="vingle"><a href="#">vingle</a></li>
           </ul>


1026 확인사항 :
1. nav 포커스 아웃됐을 때, tabindex없애고 다시 제자리로
2. 인디게이터 영역 반응형확인
3. footer 아이콘 이미지 확인
4.