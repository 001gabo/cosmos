 function parallax(){
     //Declarando variables
     var layer1=document.getElementById('layer-1');
     var layer2=document.getElementById('layer-2');
     var layer3=document.getElementById('layer-3');
     var layer4=document.getElementById('layer-4');
     var layer5=document.getElementById('layer-5');
     var layer6=document.getElementById('layer-6');
     var layer7=document.getElementById('layer-7');
     //Aplicando posicion
     layer1.style.top = -(window.pageYOffset / 4)+ 'px';
     layer2.style.top = -(window.pageYOffset / 1.5)+ 'px';
     layer3.style.top = -(window.pageYOffset / 2)+ 'px';
     layer4.style.top = -(window.pageYOffset / 1.2)+ 'px';
     layer5.style.top = -(window.pageYOffset / 1.2)+ 'px';
     layer6.style.top = -(window.pageYOffset / 1.2)+ 'px';
     layer7.style.top = -(window.pageYOffset / 1.2)+ 'px';
 }
window.addEventListener("scroll",parallax,false);