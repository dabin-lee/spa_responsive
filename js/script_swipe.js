$(function(){
    var winH = $(window).innerHeight();

    //jQuery
    $(window).resize(function(){

        // section feature
        var $feaTureCont = $('.feature__cont'),
            $feaTureContUl = $feaTureCont.find('ul'),
            $feaTureContList = $feaTureContUl.find('li');
            $feaTureContLi = $feaTureContUl.find('li').length;
        var Cnt = 0,
            setId = 0;

            console.log($feaTureContLi);

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



    });

});