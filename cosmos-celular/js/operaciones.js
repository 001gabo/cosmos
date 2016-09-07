function convertir(){
    var d1=(document.miformulario.numero1.value)*1;
    opc = (document.getElementById("opciones").value)*1;
    var resultado;
    var lykm=1.0570008*Math.pow(10,-13);
    var lymt=1.0570008*Math.pow(10,-16);
    switch(opc){
        case 0:
            //Años luz a Kms
            resultado=d1*lykm;
            document.miformulario.resultado.value=resultado + " Kms";
            break;
        case 1:
            //Kms a Años luz
            resultado=d1/lykm;
            document.miformulario.resultado.value=resultado + " Años luz";
            break;
        case 2:
            //Mts a Años luz
            resultado=d1*lymt;
            document.miformulario.resultado.value=resultado + " Años luz";
            break;
        case 3:
            //Años luz a Mts 
            resultado=d1/lymt;
            document.miformulario.resultado.value=resultado + " Años luz";
            break;
            
    }
}