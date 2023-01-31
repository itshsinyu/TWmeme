window.addEventListener( "load" , function (){
    // selection
    let s01 = this.document.getElementById("select-01");
    let s02 = this.document.getElementById("select-02");
    let s03 = this.document.getElementById("select-03");
    // img
    let img01 = this.document.getElementsByClassName("img01")[0];
    let img02 = this.document.getElementsByClassName("img02")[0];
    let img03 = this.document.getElementsByClassName("img03")[0];
    // money
    let m01 = this.document.getElementsByClassName("money-c")[0];
    let m02 = this.document.getElementsByClassName("money-c")[1];
    let m03 = this.document.getElementsByClassName("money-c")[2];
    // list
    let li01 = this.document.getElementsByClassName("list")[0];
    let li02 = this.document.getElementsByClassName("list")[1];
    let li03 = this.document.getElementsByClassName("list")[2];
    console.log(li01);
    
    s01.addEventListener("click", function(){
        // console.log("123");
        img01.classList.remove("hide");
        img02.classList.add("hide");
        img03.classList.add("hide");
        m01.classList.remove("hide");
        m02.classList.add("hide");
        m03.classList.add("hide");
        li01.classList.add("bg-yellow")
        li02.classList.remove("bg-yellow")
        li03.classList.remove("bg-yellow")
    });
    s02.addEventListener("click", function(){
        img02.classList.remove("hide");
        img01.classList.add("hide");
        img03.classList.add("hide");
        m02.classList.remove("hide");
        m01.classList.add("hide");
        m03.classList.add("hide");
        li02.classList.add("bg-yellow")
        li03.classList.remove("bg-yellow")
        li01.classList.remove("bg-yellow")
    });
    s03.addEventListener("click", function(){
        img03.classList.remove("hide");
        img01.classList.add("hide");
        img02.classList.add("hide");
        m03.classList.remove("hide");
        m02.classList.add("hide");
        m01.classList.add("hide");
        li03.classList.add("bg-yellow")
        li02.classList.remove("bg-yellow")
        li01.classList.remove("bg-yellow")
    });
});