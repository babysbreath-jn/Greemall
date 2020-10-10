window.onload = function(){
    var oImages = document.getElementById("images");
    var oMark = document.getElementById("mark");
    var oMag = document.getElementById("magnify");
    var oImg = document.getElementById("img");
    
    oImages.onmouseenter = function(){
        oMark.style.display = "block";
        oMag.style.display = "block";
    }

    oImages.onmouseleave = function(){
        oMark.style.display = "none";
        oMag.style.display = "none";
    }

    oImages.onmousemove = function(ev){
        var e = ev || window.event;
        var l = e.clientX - oImages.offsetLeft - 100;
        l = Math.max(0, l);
        l = Math.min(198, l);
        var t = e.clientY - oImages.offsetTop - 100;
        t = Math.max(0, t);
        t = Math.min(198, t);
        oMark.style.left = l + "px";
        oMark.style.top = t + "px";

        oImg.style.left = -2 * l + "px";
        oImg.style.top = -2 * t + "px";
    }

    var oCenter = document.getElementById("cn");
			var img1 = document.getElementById("img1");
			var img5 = document.getElementById("img5");
			var left = document.getElementById("left");
			var right = document.getElementById("right");
			right.onclick = function(){
				oCenter.style.left="-85px";
			}
			left.onclick = function(){
				oCenter.style.left="0px";
			}
}