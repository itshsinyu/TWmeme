window.addEventListener( "load" , function (){
    // selection
    let opt01 = this.document.getElementsByClassName("options")[0];
    let checked01 = this.document.getElementsByClassName("checked")[0];
    let from01 = this.document.getElementsByClassName("from")[0];
    let opt02 = this.document.getElementsByClassName("options")[1];
    let checked02 = this.document.getElementsByClassName("checked")[1];
    let from02 = this.document.getElementsByClassName("from")[1];
    let opt03 = this.document.getElementsByClassName("options")[2];
    let checked03 = this.document.getElementsByClassName("checked")[2];
    let from03 = this.document.getElementsByClassName("from")[2];
    let opt04 = this.document.getElementsByClassName("options")[3];
    let checked04 = this.document.getElementsByClassName("checked")[3];
    let from04 = this.document.getElementsByClassName("from")[3];
    let opt05 = this.document.getElementsByClassName("options")[4];
    let checked05 = this.document.getElementsByClassName("checked")[4];
    let from05 = this.document.getElementsByClassName("from")[4];

    opt01.addEventListener("click", function(){
        // console.log("123");
        checked01.classList.remove("hide");
        from01.classList.remove("hide");
    })
    opt02.addEventListener("click", function(){
        checked02.classList.remove("hide");
        from02.classList.remove("hide");
    })
    opt03.addEventListener("click", function(){
        checked03.classList.remove("hide");
        from03.classList.remove("hide");
    })
    opt04.addEventListener("click", function(){
        checked04.classList.remove("hide");
        from04.classList.remove("hide");
    })
    opt05.addEventListener("click", function(){
        checked05.classList.remove("hide");
        from05.classList.remove("hide");
    })
    // btn
    let q01 = this.document.getElementById("q01");
    let q02 = this.document.getElementById("q02");
    let q03 = this.document.getElementById("q03");
    let q04 = this.document.getElementById("q04");
    let q05 = this.document.getElementById("q05");
    let result = this.document.getElementById("result");
    let mainTest = this.document.getElementsByClassName("main-test")[0];
    // console.log(q02);
    
    this.document.getElementById("next-01").addEventListener("click", function(){
        q02.classList.remove("hide");
        q01.classList.add("hide");
    });
    this.document.getElementById("next-02").addEventListener("click", function(){
        q03.classList.remove("hide");
        q02.classList.add("hide");
    });
    this.document.getElementById("next-03").addEventListener("click",function(){
        q03.classList.add("hide");
        q04.classList.remove("hide");
    })
    this.document.getElementById("next-04").addEventListener("click",function(){
        q04.classList.add("hide");
        q05.classList.remove("hide");
    })
    this.document.getElementById("prev-02").addEventListener("click", function(){
        q01.classList.remove("hide");
        q02.classList.add("hide");
    });
    this.document.getElementById("prev-03").addEventListener("click", function(){
        q02.classList.remove("hide");
        q03.classList.add("hide");
    });
    this.document.getElementById("prev-04").addEventListener("click", function(){
        q03.classList.remove("hide");
        q04.classList.add("hide");
    });
    this.document.getElementById("prev-05").addEventListener("click", function(){
        console.log('djlasl')
        q04.classList.remove("hide");
        q05.classList.add("hide");
    });

    // result-icons
    let sharebtn = this.document.getElementsByClassName("share")[0];
    let socialdiv = this.document.getElementsByClassName("social")[0];
    sharebtn.addEventListener("click", function(){
        socialdiv.classList.toggle("hide");
    })
    // top-left pics 成癮指數
    let topl01 = this.document.getElementById("topl01");
    let topl02 = this.document.getElementById("topl02");
    let topl03 = this.document.getElementById("topl03");
    // top-right test
    let topr01 = this.document.getElementsByClassName("top-right")[0];
    let topr02 = this.document.getElementsByClassName("top-right")[1];
    let topr03 = this.document.getElementsByClassName("top-right")[2];
    // bottom-right pics 吉卜力
    let bottomr01 = this.document.getElementsByClassName("bottom-right")[0];
    let bottomr02 = this.document.getElementsByClassName("bottom-right")[1];
    let bottomr03 = this.document.getElementsByClassName("bottom-right")[2];

    

    // 成績單
    document.getElementById("next-05").addEventListener("click", function () {
        
        let total = document.getElementsByTagName("input");
        let grade = 0;
        for(let i=0; i<total.length; i++){
            if(total[i].value == "right"){
                console.log(total[i].value)
                if(total[i].checked){
                    grade += 20;
                }
            }
        }
        // console.log(total)
        
        // console.log(grade)
        switch (grade) {
            case 0:
            case 20:
                alert('您的分數為:'+ grade +'分');
                result.classList.remove("hide");
                mainTest.classList.add("hide");
                bottomr03.classList.remove("hide");
                bottomr01.classList.add("hide");
                
                break;
            case 40:
            case 60:
                alert('您的分數為:'+ grade +'分');
                result.classList.remove("hide");
                mainTest.classList.add("hide");
                topl03.classList.add("hide");
                topl02.classList.remove("hide");
                topr02.classList.remove("hide");
                topr03.classList.add("hide");
                bottomr02.classList.remove("hide");
                bottomr01.classList.add("hide");
                break;
            case 80:
            case 100:
                alert('您的分數為:'+ grade +'分');
                result.classList.remove("hide");
                mainTest.classList.add("hide");
                topl03.classList.add("hide");
                topl01.classList.remove("hide");
                topr01.classList.remove("hide");
                topr03.classList.add("hide");
                break;
            }
            });
        });

        // 成績單左下的v或x
        // let num = document.getElementsByClassName("bottom-left-num");
        let optR01 = document.getElementsByClassName("opt-right")[0];
        let optR02 = document.getElementsByClassName("opt-right")[1];
        let optR03 = document.getElementsByClassName("opt-right")[2];
        let optR04 = document.getElementsByClassName("opt-right")[3];
        let optR05 = document.getElementsByClassName("opt-right")[4];
        optR01.addEventListener("click", function(){
            document.getElementsByClassName("right")[0].classList.remove("hide");
            document.getElementsByClassName("wrong")[0].classList.add("hide");
        })
        optR02.addEventListener("click", function(){
            document.getElementsByClassName("right")[1].classList.remove("hide");
            document.getElementsByClassName("wrong")[1].classList.add("hide");
        })
        optR03.addEventListener("click", function(){
            document.getElementsByClassName("right")[2].classList.remove("hide");
            document.getElementsByClassName("wrong")[2].classList.add("hide");
        })
        optR04.addEventListener("click", function(){
            document.getElementsByClassName("right")[3].classList.remove("hide");
            document.getElementsByClassName("wrong")[3].classList.add("hide");
        })
        optR05.addEventListener("click", function(){
            document.getElementsByClassName("right")[4].classList.remove("hide");
            document.getElementsByClassName("wrong")[4].classList.add("hide");
        })
        