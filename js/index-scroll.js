let memediv = document.getElementsByClassName("index-allmeme")[0];
let leftImg01 = document.getElementsByClassName("left-img")[0];
let leftImg02 = document.getElementsByClassName("left-img")[1];
// let leftImgs = document.getElementsByClassName("left-img");
let rightImg01 = document.getElementsByClassName("right-img")[0];
let rightImg02 = document.getElementsByClassName("right-img")[1];
let evergreen = document.getElementsByClassName("evergreen")[0];
// console.log(evergreen);
// scroll監聽事件
function scrollDetect(){
    let lastScroll = 0;
  
    window.onscroll = function() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  
        if (currentScroll > 0 && lastScroll <= currentScroll){
          lastScroll = currentScroll;
          console.log('bottom');
          leftImg01.classList.add("trans-left");
          leftImg02.classList.add("trans-left");
          rightImg01.classList.add("trans-right");
          rightImg02.classList.add("trans-right");
          leftImg01.classList.remove("trans-right");
          leftImg02.classList.remove("trans-right");
          rightImg01.classList.remove("trans-left");
          rightImg02.classList.remove("trans-left");
          evergreen.classList.add("evergreen-left");
          evergreen.classList.remove("trans-right");
        }else{
          lastScroll = currentScroll;
          console.log('top');
          leftImg01.classList.add("trans-right");
          leftImg02.classList.add("trans-right");
          rightImg01.classList.add("trans-left");
          rightImg02.classList.add("trans-left");
          leftImg01.classList.remove("trans-left");
          leftImg02.classList.remove("trans-left");
          rightImg01.classList.remove("trans-right");
          rightImg02.classList.remove("trans-right");
          evergreen.classList.add("trans-right");
          evergreen.classList.remove("evergreen-left");
        }
    };
}

scrollDetect();