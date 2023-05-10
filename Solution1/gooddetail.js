// JavaScript source code
let str;
let str2;
let name;
let tele;
let addrss;
function add(){
    str = document.getElementById("text");
    str.value = Number(str.value) + 1;
    str2 = document.getElementById("cost");
    str2.value = Number(str.value)*120;
}
function sub() {
    str = document.getElementById("text");
    str.value = str.value - 1;
    str2 = document.getElementById("cost");
    str2.value = Number(str.value) *120;
}
function check() {
    str = document.getElementById("text");
    str2 = document.getElementById("cost");
    name = document.getElementById("name");
    tele = document.getElementById("telenum");
    address = document.getElementById("address");
    //如果需要传送信息给后端的话可以直接用啦~，str是物品数目，str2是商品总价
}