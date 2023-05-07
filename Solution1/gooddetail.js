// JavaScript source code
let str;
let str2;
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