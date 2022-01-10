$(document).ready(function(){
    //setInterval(익명함수, 밀리초): 밀리초 간격으로 익명함수를 실행한다.
    var time = setInterval(function(){
        var now = new Date();
        var hr = now.getHours();
        var mi = now.getMinutes();
        var sec = now.getSeconds();

        if(hr >= 10) hNum =hr;
        else hNum = "0" + hr; 

        if(mi >= 10) mNum =mi;
        else mNum = "0" + mi; 

        if(sec >= 10) sNum =sec;
        else sNum = "0" + sec; 

        $('p span').eq(0).text(hNum);
        $('p span').eq(1).text(mNum);
        $('p span').eq(2).text(sNum);

    }, 1000);

    var now = new Date();
    var hr = now.getHours();

    if(hr >= 5 && hr < 11) {
        $('#wrap').removeClass();
        $('#wrap').addClass('mornig');
        $('nav li').removeClass();
        $('nav li').eq(0).addClass('on')
    }else if(hr >= 11 && hr < 17) {
        $('#wrap').removeClass('mornig');
        $('#wrap').addClass('afternoon');
        $('nav li').removeClass();
        $('nav li').eq(1).addClass('on')
    }else if(hr >= 17 && hr < 22) {
        $('#wrap').removeClass('afternoon');
        $('#wrap').addClass('evening');
        $('nav li').removeClass();
        $('nav li').eq(2).addClass('on')
    }else {
        $('#wrap').removeClass();
        $('#wrap').addClass('night');
        $('nav li').removeClass();
        $('nav li').eq(3).addClass('on')
    }

    $('nav li').on('click', function() {
        var className = $(this).children('a').text();
        $('nav li').removeClass();
        $(this).addClass('on');
        $('#wrap').removeClass();
        $('#wrap').addClass(className);
    });
});