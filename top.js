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
    setTimeout(showSlides, 3000);
}
function scroll() {
    var top = $("body").offset().top;
    var scrollTop = $(window).scrollTop();
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
var input=document.getElementById('find');
input.onfocus=function(){
   if(this.value==" 请输入搜索内容")
   this.value="";
   this.style.color="black";
}
input.onblur=function(){  
   if(this.value==""){
   this.value=" 请输入搜索内容";
   this.style.color="#999"
   }
}
