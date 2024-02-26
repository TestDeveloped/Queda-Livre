var FPS = 60;
var dt = 100; /* ms */
var Voy=-50;
var Yo = 250;
var g=9.80;/* ms/s^2 */

var t=0;/* tempo */

var posX=50;
var posY=Yo;

var circulo= document.querySelector(".circulo");
circulo.style.left=posX+'px';
circulo.style.top=posY+'px';

setInterval(function(){
    t=t+dt/1000;
    posY=Yo+Voy*t-g*t*t/2;
    circulo.style.top=posY+'px';
    if (posY>700) {
        posY=Yo;
        t=0;
    }
},
1*1000/FPS);