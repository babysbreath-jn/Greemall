        window.onload = function(){
            const banner = document.querySelector(".banner");
            const img = document.querySelector(".img");
            const btn = document.querySelectorAll(".box li");
           
            
            let ind = 0;
            let timer = null;
            let isRunning = true;
           
            // tab();
            tim();
            for(let i = 0;i < btn.length;i++){
                btn[i].index = i;
                btn[i].onclick = function(){
                    ind = this.index + 1;
                    tab();
                }
            }
// tim();
            function tim(){
                timer = setInterval(function(){
                    if(!isRunning){
                        isRunning = true;
                    }else{
                        return; 
                    }
                    ind++;
                    tab()
                },1500)
            }

            function tab(){
                for(let i = 0;i < btn.length;i++){
                    btn[i].className = "";
                    if(ind == 3){
                       btn[0].className = "active";
                    }else if(ind == 0){
                        btn[btn.length - 1].className = "active"
                    }else{
                        btn[ind - 1].className = "active"
                    }
                }

                isRunning = true;
                startMove(img,{left: ind * -1280},function(){
                    if(ind == 3){
                        ind = 1;
                        img.style.left = "-1280px";
                    }else if(ind == 0){
                        ind = btn.length - 1;
                        img.style.left = ind * -1280 + "px"
                    }
                    isRunning = false;
                });
                console.log(ind)
            };
            banner.onmouseenter = function(){
                clearInterval(timer)
            };
            banner.onmouseleave = function(){
                tim()
            }
       

    var Li_1 = document.getElementById("li1");
    var Li_2 = document.getElementById("li2");
    var Li_3 = document.getElementById("li3");
    var Li_4 = document.getElementById("li4");
    var Li_5 = document.getElementById("li5");
    var Li_6 = document.getElementById("li6");
    var Li_7 = document.getElementById("li7");
    var Li_8 = document.getElementById("li8");
    var Li_9 = document.getElementById("li9");
    var Li_10 = document.getElementById("li10");
    var Li_11 = document.getElementById("li11");
    var Li_12 = document.getElementById("li12");
    var Li_13 = document.getElementById("li13");
    var Div_1 = document.getElementById("div1");
    var Div_2 = document.getElementById("div2");
    var Div_3 = document.getElementById("div3");
    var Div_4 = document.getElementById("div4");
    var Div_5 = document.getElementById("div5");
    var Div_6 = document.getElementById("div6");
    var Div_7 = document.getElementById("div7");
    var Div_8 = document.getElementById("div8");
    var Div_9 = document.getElementById("div9");
    var Div_10 = document.getElementById("div10");
    var Div_11 = document.getElementById("div11");
    var Div_12 = document.getElementById("div12");
    var Div_13 = document.getElementById("div13");

    Li_1.onmouseenter = function(){
        Div_1.style.display = "block";
    }
    Li_1.onmouseleave = function(){
        Div_1.style.display = "none";
    }

    Li_2.onmouseenter = function(){
        Div_2.style.display = "block";
    }
    Li_2.onmouseleave = function(){
        Div_2.style.display = "none";
    }

    Li_3.onmouseenter = function(){
        Div_3.style.display = "block";
    }
    Li_3.onmouseleave = function(){
        Div_3.style.display = "none";
    }

    Li_4.onmouseenter = function(){
        Div_4.style.display = "block";
    }
    Li_4.onmouseleave = function(){
        Div_4.style.display = "none";
    }

    Li_5.onmouseenter = function(){
        Div_5.style.display = "block";
    }
    Li_5.onmouseleave = function(){
        Div_5.style.display = "none";
    }

    Li_6.onmouseenter = function(){
        Div_6.style.display = "block";
    }
    Li_6.onmouseleave = function(){
        Div_6.style.display = "none";
    }

    Li_7.onmouseenter = function(){
        Div_7.style.display = "block";
    }
    Li_7.onmouseleave = function(){
        Div_7.style.display = "none";
    }

    Li_8.onmouseenter = function(){
        Div_8.style.display = "block";
    }
    Li_8.onmouseleave = function(){
        Div_8.style.display = "none";
    }

    Li_9.onmouseenter = function(){
        Div_9.style.display = "block";
    }
    Li_9.onmouseleave = function(){
        Div_9.style.display = "none";
    }

    Li_10.onmouseenter = function(){
        Div_10.style.display = "block";
    }
    Li_10.onmouseleave = function(){
        Div_10.style.display = "none";
    }

    Li_11.onmouseenter = function(){
        Div_11.style.display = "block";
    }
    Li_11.onmouseleave = function(){
        Div_11.style.display = "none";
    }

    Li_12.onmouseenter = function(){
        Div_12.style.display = "block";
    }
    Li_12.onmouseleave = function(){
        Div_12.style.display = "none";
    }

    Li_13.onmouseenter = function(){
        Div_13.style.display = "block";
    }
    Li_13.onmouseleave = function(){
        Div_13.style.display = "none";
    }

        var oList = document.getElementsByClassName("List");
        var oBac = document.getElementById("videoBac");
        var oCon = document.getElementById("con");
        var oDel = document.getElementById("del");
        var oPlaying = document.getElementById("playing");
        var One = document.getElementById("one");
        var Two = document.getElementById("two");
        var Three = document.getElementById("three");
        var Four = document.getElementById("four");
        oList[0].onclick = function(){
            oBac.style.display = "block";
            oPlaying.appendChild(One);
            One.style.display = "block"
            oCon.innerHTML = "电火锅";
    
            oDel.onclick = function(){
                oBac.style.display = "none";
                oPlaying.removeChild(One);
            }
        }
    
        oList[1].onclick = function(){
            oBac.style.display = "block";
            oPlaying.appendChild(Two);
            Two.style.display = "block";
            oCon.innerHTML = "金康煲";
    
            oDel.onclick = function(){
                oBac.style.display = "none";
                oPlaying.removeChild(Two);
            } 
        } 
        
        oList[2].onclick = function(){
            oBac.style.display = "block";
            oPlaying.appendChild(Three);
            Three.style.display = "block";
            oCon.innerHTML = "洗衣机";
    
            oDel.onclick = function(){
                oBac.style.display = "none";
                oPlaying.removeChild(Three);
            }
        }
         
        
        oList[3].onclick = function(){
            oBac.style.display = "block";
            
            Four.style.display = "block";
            oPlaying.appendChild(Four);
            Four.preload = "preload";
            oCon.innerHTML = "洗车机";
    
            oDel.onclick = function(){
                oBac.style.display = "none";
                oPlaying.removeChild(Four);  
            }
        } 

    }