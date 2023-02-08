window.addEventListener( "load" , function (){
    // videos
    let video01 = document.getElementsByClassName("video-item")[0];
    let video02 = document.getElementsByClassName("video-item")[1];
    let video03 = document.getElementsByClassName("video-item")[2];

    // img trans video
    let container = document.getElementsByClassName("container")[0];
    let playingvid = document.getElementsByClassName("video")[0];

    video01.addEventListener("click", function(){
        // console.log("123");
        video01.classList.add("active");
        video01.classList.remove("aside");
        video02.classList.remove("active");
        video02.classList.add("aside");
        video03.classList.remove("active");
        video03.classList.add("aside");
    });
    video02.addEventListener("click", function(){
        video02.classList.add("active");
        video02.classList.remove("aside");
        video01.classList.remove("active");
        video01.classList.add("aside");
        video03.classList.remove("active");
        video03.classList.add("aside");
        container.classList.remove("hide");
        playingvid.classList.add("hide");
    });
    video03.addEventListener("click", function(){
        video03.classList.add("active");
        video03.classList.remove("aside");
        video02.classList.remove("active");
        video02.classList.add("aside");
        video01.classList.remove("active");
        video01.classList.add("aside");
    });
    // after偽元素
    // let playing = window.getComputedStyle(a,'::after');
    let playing = document.getElementsByClassName("playing")[0];
    playing.addEventListener("click", function(){
        console.log('123');
        playingvid.classList.remove("hide");
        container.classList.add("hide");
    });
});