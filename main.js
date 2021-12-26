function init(){
    document.querySelector("h1").onclick=clickFunc();
}
function clickFunc(){
    this.style.backgroundColor="yellow";
}