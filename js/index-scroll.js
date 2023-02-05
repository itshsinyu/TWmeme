let memediv = document.getElementsByClassName("index-allmeme")[0];
let leftImg01 = document.getElementsByClassName("left-img")[0];
let leftImg02 = document.getElementsByClassName("left-img")[1];
let rightImg01 = document.getElementsByClassName("right-img")[0];
let rightImg02 = document.getElementsByClassName("right-img")[1];
// console.log(memediv);

// window.addEventListener("scroll", function(){
//     console.log( leftImg01.getBoundingClientRect().bottom );
//     console.log("leftImg01 scrollTop: " + leftImg01.scrollTop);
//     if(leftImg01.scrollTop <= 500){
//         leftImg01.classList.add("transleft");}
//     if(leftImg02.getBoundingClientRect().bottom <= 200){
//         leftImg02.classList.add("transleft");}
//     if(rightImg01.getBoundingClientRect().bottom <= 200){
//         rightImg01.classList.add("transright");}
//     if(rightImg02.getBoundingClientRect().bottom <= 200){
//         rightImg02.classList.add("transright");}

    
// });

window.addEventListener("scroll", function(){
    console.log(window.scrollY);
    console.log(leftImg01.scrollTop);
    if (this.window.offsetTop - leftImg01.scrollTop) {
        leftImg01.classList.add('transleft');}
    // if (window.scrollY > 600) {leftImg02.classList.add('transleft');}
    // if (window.scrollY > 1400) {rightImg01.classList.add('transright');}
    // if (window.scrollY > 1700) {rightImg01.classList.add('transright');}
});

