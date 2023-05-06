var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // 切换时间为 2 秒
}
function scroll() {
    var top = $("body").offset().top;//获取导航栏变色的位置距顶部的高度
    var scrollTop = $(window).scrollTop();//获取当前窗口距顶部的高度
    if (scrollTop <= top+500) {
        $('.header').css('background-color', 'transparent');
    } else {
        $('.header').css('background-color', '#cad2c5');
    }
}
function scroll1() {
    var top = $("body").offset().top;
    var scrollTop = $(window).scrollTop();
    if(scrollTop>400)
    {
        if(scrollTop<=now_top)
        {
            now_top=scrollTop;
            $('.header').css('visibility', 'visible');
            $('.header').css('background-color', '#cad2c5');
        }
        else{
            now_top=scrollTop;
            $('.header').css('visibility', 'hidden');
        }
    }
    else if(scrollTop==0)
    {
        $('.header').css('visibility', 'visible');
        $('.header').css('background-color', 'transparent');
    }
    else{
        $('.header').css('visibility', 'hidden');
    }
}
var now_top=0;
$(window).on('scroll', function() {
    scroll1()
});