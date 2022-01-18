$(document).ready(function(){
    var ht = $(window).height();  // 웹 브라우저의 높이값을 얻어온다.

    $('section').height(ht); // 웹 브라우저의 높이값을 section의 높이값으로 지정한다.

    // 웹 브라우저를 리사이즈하면 다시 웹 브라우저의 높이값을 section의 높이값으로 지정한다.
    $(window).on('resize', function(){
        var ht = $(window).height(); 
        $('section').height(ht);
    });

    $(window).on('scroll', function(){
        var ht = $(window).height(); 
        var sr = $(window).scrollTop();

        for(var i=0; i < 4; i++) {
            if(sr >= ht*i && sr < ht*(i+1)) {
                $('#menu li').removeClass();
                $('#menu li').eq(i).addClass('on');
            }
        }

        $('section').on('mousewheel', function(e, delta){
            if(delta > 0) { // 마우스 휠을 올렸을 때
                var prev = $(this).prev().offset().top; // 현재 있는 페이지의 이전 페이지의 top 값을 얻는다.
                $('html, body').stop().animate({'scrollTop':prev}, 1400, 'easeOutBounce');
            }else if(delta < 0) { // 마우스 휠을 내렸을 때
                var next = $(this).next().offset().top; // 현재 있는 페이지의 이전 페이지의 top 값을 얻는다.
                $('html, body').stop().animate({'scrollTop':next}, 1400, 'easeOutBounce');
            }
        });
    });
});