window.addEventListener( "load" , function (){
    // videos
    let video01 = document.getElementsByClassName("video-item")[0];
    let video02 = document.getElementsByClassName("video-item")[1];
    let video03 = document.getElementsByClassName("video-item")[2];

    // img trans video
    let container01 = document.getElementsByClassName("container")[0];
    let playingvid01 = document.getElementsByClassName("video")[0];
    let container02 = document.getElementsByClassName("container")[1];
    let playingvid02 = document.getElementsByClassName("video")[1];
    let container03 = document.getElementsByClassName("container")[2];
    let playingvid03 = document.getElementsByClassName("video")[2];

    // playicons
    let playicon01 = document.getElementsByClassName("playicon")[0];
    let playicon02 = document.getElementsByClassName("playicon")[1];
    let playicon03 = document.getElementsByClassName("playicon")[2];
    // console.log(playingvid02)

    video01.addEventListener("click", function(){
        // console.log("123");
        video01.classList.add("active");
        video01.classList.remove("aside");
        video02.classList.remove("active");
        video02.classList.add("aside");
        video03.classList.remove("active");
        video03.classList.add("aside");
        container02.classList.remove("hide");
        playingvid02.classList.add("hide");
        container03.classList.remove("hide");
        playingvid03.classList.add("hide");
        playicon02.classList.add("hide");
        playicon03.classList.add("hide");
        playicon01.classList.remove("hide");
    });
    video02.addEventListener("click", function(){
        video02.classList.add("active");
        video02.classList.remove("aside");
        video01.classList.remove("active");
        video01.classList.add("aside");
        video03.classList.remove("active");
        video03.classList.add("aside");
        container01.classList.remove("hide");
        playingvid01.classList.add("hide");
        container03.classList.remove("hide");
        playingvid03.classList.add("hide");
        playicon01.classList.add("hide");
        playicon03.classList.add("hide");
        playicon02.classList.remove("hide");
    });
    video03.addEventListener("click", function(){
        video03.classList.add("active");
        video03.classList.remove("aside");
        video02.classList.remove("active");
        video02.classList.add("aside");
        video01.classList.remove("active");
        video01.classList.add("aside");
        container01.classList.remove("hide");
        playingvid01.classList.add("hide");
        container02.classList.remove("hide");
        playingvid02.classList.add("hide");
        playicon02.classList.add("hide");
        playicon01.classList.add("hide");
        playicon03.classList.remove("hide");
    });
    playicon01.addEventListener("click", function(){
        playingvid01.classList.remove("hide");
        container01.classList.add("hide");
    });
    playicon02.addEventListener("click", function(){
        playingvid02.classList.remove("hide");
        container02.classList.add("hide");
    });
    playicon03.addEventListener("click", function(){
        playingvid03.classList.remove("hide");
        container03.classList.add("hide");
    });
});