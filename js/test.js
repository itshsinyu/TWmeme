window.addEventListener( "load" , function (){
    // selection
    let opt01 = this.document.getElementsByClassName("options")[0];
    let checked01 = this.document.getElementsByClassName("checked")[0];
    let from01 = this.document.getElementsByClassName("from")[0];
    
    let opt10 = this.document.getElementsByClassName("options")[1];
    let checked10 = this.document.getElementsByClassName("checked")[1];
    let from10 = this.document.getElementsByClassName("from")[1];
    console.log(opt10);
    
    opt01.addEventListener("click", function(){
        console.log("123");
        checked01.classList.remove("hide");
        from01.classList.remove("hide");
    })
    opt10.addEventListener("click", function(){
        console.log("123");
        checked10.classList.remove("hide");
        from10.classList.remove("hide");
    })
    // btn
    let q01 = this.document.getElementById("q01");
    let result = this.document.getElementById("result");

    let nextbtn01 = this.document.getElementById("next-01");
    let prevbtn10 = this.document.getElementById("prev-10");
    let nextbtn10 = this.document.getElementById("next-10");
    let mainTest = this.document.getElementsByClassName("main-test")[0];
    console.log(prevbtn10);
    
    nextbtn01.addEventListener("click", function(){
        console.log("123");
        q10.classList.remove("hide");
        q01.classList.add("hide");
    });
    prevbtn10.addEventListener("click", function(){
        q01.classList.remove("hide");
        q10.classList.add("hide");
    });
    nextbtn10.addEventListener("click",function(){
        q10.classList.add("hide");
        result.classList.remove("hide");
        mainTest.classList.add("hide");
    })

    // result-icons
    let sharebtn = this.document.getElementsByClassName("share")[0];
    let socialdiv = this.document.getElementsByClassName("social")[0];
    sharebtn.addEventListener("click", function(){
        socialdiv.classList.remove("hide");
    })
});