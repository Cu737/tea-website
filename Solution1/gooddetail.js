// JavaScript source code
let str;
let str2;
let name;
let tele;
let addrss;
let num;
let cost;
function add(){
    str = document.getElementById("text");
    str.value = Number(str.value) + 1;
    str2 = document.getElementById("cost");
    str2.value = Number(str.value)*120;
}
function sub() {
    str = document.getElementById("text");
    str.value = Number(str.value) - 1;
    str2 = document.getElementById("cost");
    str2.value = Number(str.value) *120;
}
function check() {
    num = document.getElementById("text").value;
    cost = document.getElementById("cost").value;
    name = document.getElementById("name").value;
    tele = document.getElementById("telenum").value;
    address = document.getElementById("address").value;
    //ртио╣д
}