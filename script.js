$(document).ready(function(){
    // *menu 각각 슬라이드업&다운
    $('.menu>li').mouseover(function(){
        $(this).find('.sub').stop().slideDown();
    });
    $('.menu>li').mouseout(function(){
        $(this).find('.sub').stop().slideUp();
    });

    // *imgslide 페이드인&아웃
    $('.imgslide a:gt(0)').hide();
    setInterval(function(){
        $('.imgslide a:first').fadeOut(2500)
        .next('a').fadeIn(2500)
        .end().appendTo('.imgslide');
    },2500);
});