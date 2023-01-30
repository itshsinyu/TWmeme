window.addEventListener( "load" , function (){
    // tags
    let populartag = document.getElementById("popular");
    let newtag = document.getElementById("new");
    let animalstag = document.getElementById("animals");
    let celebtag = document.getElementById("celebrities");
    let dramatag = document.getElementById("drama");
    // div
    let populardiv = document.getElementsByClassName("popular")[0];
    let newdiv = document.getElementsByClassName("new")[0];
    let animalsdiv = document.getElementsByClassName("animals")[0];
    let celediv = document.getElementsByClassName("celebrities")[0];
    let dramadiv = document.getElementsByClassName("drama")[0];
    console.log(animalsdiv);

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

    animalstag.addEventListener("click", function(){
        console.log("clicked");
        animalsdiv.classList.remove("hide");
        populardiv.classList.add("hide");
        newdiv.classList.add("hide");
        celediv.classList.add("hide");
        dramadiv.classList.add("hide");
    });

    celebtag.addEventListener("click", function(){
        celediv.classList.remove("hide");
        populardiv.classList.add("hide");
        newdiv.classList.add("hide");
        animalsdiv.classList.add("hide");
        dramadiv.classList.add("hide");
    });

    dramatag.addEventListener("click", function(){
        dramadiv.classList.remove("hide");
        populardiv.classList.add("hide");
        newdiv.classList.add("hide");
        animalsdiv.classList.add("hide");
        celediv.classList.add("hide");
    });
});