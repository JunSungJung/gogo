$(document).ready(function(){
    // btnMenu 버튼을 클릭 시 실행 될 모션
    $('.btnMenu').click(function(){
        $(this).fadeOut();
        $('nav').addClass('on');
        $('section').addClass('on');
    });

    $('nav li').click(function(){
        $('.btnMenu').fadeIn();
        $('nav').removeClass('on');
        $('section').removeClass('on');
    });
});