window.onload = function(){
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