$(document).ready(function(){
    //setInterval(익명함수, 밀리초): 밀리초 간격으로 익명함수를 실행한다.
    var time = setInterval(function(){
        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();

        $('p span').eq(0).text(hr);
        $('p span').eq(1).text(min);
        $('p span').eq(2).text(sec);

        if(sec <10) {
            $('p span').eq(2).text('0'+sec);
        }

    }, 1000);
});