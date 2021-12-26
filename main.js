function init(){
    document.querySelector("hi").onclick=clickFunc();
}
function clickFunc(){
    this.style.backgroundColor="yellow";
}