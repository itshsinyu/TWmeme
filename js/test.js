window.addEventListener( "load" , function (){
    // selection
    let opt01 = this.document.getElementsByClassName("options")[0];
    let checked01 = this.document.getElementsByClassName("checked")[0];
    let from01 = this.document.getElementsByClassName("from")[0];
    
    let opt05 = this.document.getElementsByClassName("options")[1];
    let checked05 = this.document.getElementsByClassName("checked")[1];
    let from05 = this.document.getElementsByClassName("from")[1];
    console.log(opt05);
    
    opt01.addEventListener("click", function(){
        console.log("123");
        checked01.classList.remove("hide");
        from01.classList.remove("hide");
    })
    opt05.addEventListener("click", function(){
        console.log("123");
        checked05.classList.remove("hide");
        from05.classList.remove("hide");
    })
    // btn
    let q01 = this.document.getElementById("q01");
    let result = this.document.getElementById("result");

    let nextbtn01 = this.document.getElementById("next-01");
    let prevbtn05 = this.document.getElementById("prev-05");
    let nextbtn05 = this.document.getElementById("next-05");
    let mainTest = this.document.getElementsByClassName("main-test")[0];
    console.log(prevbtn05);
    
    nextbtn01.addEventListener("click", function(){
        console.log("123");
        q05.classList.remove("hide");
        q01.classList.add("hide");
    });
    prevbtn05.addEventListener("click", function(){
        q01.classList.remove("hide");
        q05.classList.add("hide");
    });
    nextbtn05.addEventListener("click",function(){
        q05.classList.add("hide");
        result.classList.remove("hide");
        mainTest.classList.add("hide");
    })

    // result-icons
    let sharebtn = this.document.getElementsByClassName("share")[0];
    let socialdiv = this.document.getElementsByClassName("social")[0];
    sharebtn.addEventListener("click", function(){
        socialdiv.classList.toggle("hide");
    })
});