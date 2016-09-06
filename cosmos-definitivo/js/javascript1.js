 function parallax(){
     //Declarando variables
     var layer1=document.getElementById('layer-1');
     var layer2=document.getElementById('layer-2');
     var layer3=document.getElementById('layer-3');
     
     //Aplicando posicion
     layer1.style.top = -(window.pageYOffset / 4)+ 'px';
     layer2.style.top = -(window.pageYOffset / 1.5)+ 'px';
     layer3.style.top = -(window.pageYOffset / 2)+ 'px';
 }
window.addEventListener("scroll",parallax,false);