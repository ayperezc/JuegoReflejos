var initialTime = new Date();
var endTime = new Date();
var totalTimeMilliseconds = 0;
var totalTime = 0;

function colorAleatorio() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random()*15)];
    }
    return color;
}

function cuadradoOCirculo() {
    if (Math.random() > 0.5) {
        document.getElementById("forma").style.borderRadius = "50%";
    }else{
        document.getElementById("forma").style.borderRadius = "0%";
    }
    
}

function aparecerForma(){
    var top=Math.random()*400;
    var left=Math.random()*400;
    var radius=Math.random()*200 + 100;
    var colorRand = colorAleatorio();
    document.getElementById("forma").style.display = "block";
    document.getElementById("forma").style.top = top + "px";
    document.getElementById("forma").style.left = left + "px";
    document.getElementById("forma").style.width = radius + "px";
    document.getElementById("forma").style.height = radius + "px";
    document.getElementById("forma").style.backgroundColor = colorRand;
    cuadradoOCirculo();
    initialTime = new Date().getTime();
}

function desaparecerForma(){
    document.getElementById("forma").style.display = "none";
    endTime = new Date().getTime();
}

document.getElementById("forma").onclick=function(){
    desaparecerForma();            
    totalTimeMilliseconds = endTime - initialTime;
    totalTime = totalTimeMilliseconds/1000;

    document.getElementById("reactionTime").innerHTML = totalTime + " s";
    setTimeout(aparecerForma,Math.random()*3000);
    
}