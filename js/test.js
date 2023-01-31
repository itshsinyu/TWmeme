window.addEventListener( "load" , function (){
    // selection
    let populartag = document.getElementById("popular");
    // div
    let populardiv = document.getElementsByClassName("popular")[0];
    console.log(animalsdiv);
    // btn
    let prevbtn = document.getElementById("prev")
    let nextbtn = document.getElementById("next")
    
    populartag.addEventListener("click", function(){
        console.log("clicked");
        populardiv.classList.remove("hide");
        newdiv.classList.add("hide");
        animalsdiv.classList.add("hide");
        celediv.classList.add("hide");
        dramadiv.classList.add("hide");
    });

    newtag.addEventListener("click", function(){
        console.log("clicked");
        newdiv.classList.remove("hide");
        populardiv.classList.add("hide");
        animalsdiv.classList.add("hide");
        celediv.classList.add("hide");
        dramadiv.classList.add("hide");
    });

});