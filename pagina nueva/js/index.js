var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll ('.btn');

let currentSlide = 1;

//JavaScript for image slider manual navigation
var manualNav = function (manual){
    slides.forEach ((slide)=> {
        slide.classList.remove ('active');
    });
    btns.forEach ((btn)=> {
        btn.classList.remove ('active');
    });

    slides[manual].classList.add ('active');
    btns[manual].classList.add ('active');
}

btns.forEach ((btn, i)=> {
    btn.addEventListener ("click", ()=>{
        manualNav (i);
        currentSlide = i; /***/
    });
});
//Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
let active = document.getElementsByClassName ('active');
let i = 1;

var repeater = ()=> {
    setTimeout (function(){
    [...active].forEach ((activeSlide)=>{
        activeSlide.classList.remove ('active');
    });
    slides[i].classList.add ('active');
    btns[i].classList.add ('active');
    i++;

    if(slides.length == i){
        i = 0;
    }
    if(i>=slides.length){
        return;
    }
    repeater();
    },10000);
}
repeat();
}
//para que al girar el celular el codigo no se rompa
let slide = document.querySelectorAll('.img-slider');
let contador = 1;
let width = slide[0].clientWidth;
let intervalo = 3000;

window.addEventListener ('resize', function(){
width=slide[0].clientWidth;
});
function slider (){
slides.style.trasform = 'translate'(+(-width*contador)+"px");
slides.style.transition = 'transform . 1s';
contador++;
}
setInterval(function(){
slide
},intervalo);