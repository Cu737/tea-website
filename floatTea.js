
window.onscroll = function() {

    //监测滚动到了什么位置
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollWhole = document.documentElement.scrollHeight;


    //console.log("滚动距离" + scrollTop+"页面总长度"+scrollWhole);
    var percent = (scrollTop/(scrollWhole));
    //console.log("滚动比例"+percent);

    var tea = document.getElementsByClassName("floatTea");
    var teaContainer = document.getElementsByClassName("left_white");

    //console.log((teaContainer[0].offsetHeight-200)*percent);
    tea[0].setAttribute('style', 'top:'+(teaContainer[0].offsetHeight-200)*percent+'px');
    tea[1].setAttribute('style', 'top:'+(teaContainer[0].offsetHeight-200)*percent+'px')
    //console.log(tea[0].offsetTop);

}