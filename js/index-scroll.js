let memediv = document.getElementsByClassName("index-allmeme")[0];
let leftImg01 = document.getElementsByClassName("left-img")[0];
let leftImg02 = document.getElementsByClassName("left-img")[1];
let rightImg01 = document.getElementsByClassName("right-img")[0];
let rightImg02 = document.getElementsByClassName("right-img")[1];
console.log(memediv);
// scroll監聽事件
function scrollDetect(){
    let lastScroll = 0;
  
    window.onscroll = function() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  
        if (currentScroll > 0 && lastScroll <= currentScroll){
          lastScroll = currentScroll;
          console.log('bottom');
          leftImg01.classList.add("transleft");
          leftImg01.classList.remove("transright");
        }else{
          lastScroll = currentScroll;
          console.log('top');
          leftImg01.classList.add("transright");
          leftImg01.classList.remove("transleft");
        }
    };
  }

memediv.addEventListener("scroll", function(){
    // if(memediv.getBoundingClientRect().top <= 500){
        console.log('123');

    // }
});

scrollDetect();
  
  
