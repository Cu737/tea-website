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
let kind_li=document.querySelector(".tea_kind_title");
// for(let i=0;i<6;i++)
// {
//     kind_li[i].addEventListener('mouseseenter',function(){
//         alert("11")
//     })
//     // kind_li[i].addEventListener('mouseseenter',function(e){
//     //                 for(let i=0;i<4;i++)
//     //                 {
//     //                     e.write('<a href="#">h1</a>')
//     //                 }}
//     //                 )
// }

//     addEventListener('mouseseenter',function(e){
//             for(let i=0;i<4;i++)
//             {
//                 e.write('<a href="#">h1</a>')
//             }}
//             )
// }
function scroll() {
    var top = $("body").offset().top;//获取导航栏变色的位置距顶部的高度
    var scrollTop = $(window).scrollTop();//获取当前窗口距顶部的高度
    if (scrollTop <= top + 500) {
        $('.header').css('background-color', 'transparent');
    } else {
        $('.header').css('background-color', '#cad2c5');
    }
}
function scroll1() {
    var top = $("body").offset().top;
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 400) {
        if (scrollTop <= now_top) {
            now_top = scrollTop;
            $('.header').css('visibility', 'visible');
            $('.header').css('background-color', '#cad2c5');
        }
        else {
            now_top = scrollTop;
            $('.header').css('visibility', 'hidden');
        }
    }
    else if (scrollTop == 0) {
        $('.header').css('visibility', 'visible');
        $('.header').css('background-color', 'transparent');
    }
    else {
        $('.header').css('visibility', 'hidden');
    }
}
var now_top = 0;
$(window).on('scroll', function () {
    scroll1()
});
Vue.createApp({
    data() {
        return {
            text: "hello",
            message: "helloo",
            items: [
                {first:"一帘春欲暮",second:"茶烟细杨落花风"},
                {first:"青箬小壶冰共裹",second:"寒灯新茗月同煎"},
                {first:"当年曾胜赏",second:"生香熏袖，活火分茶"},
            ],
            src_item:[
                "../image/tea1.jpg",
                "../image/tea5.jpg",
                "../image/tea7.jpg"
            ]
        }
    },
    
}
).mount('#slideshow-container_id')