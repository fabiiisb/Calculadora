let operandoa;
let operandob;
let operacion;



function inicial(){

    let resultado= document.getElementById("resultado");
    
    let uno= document.getElementById("uno");
    let dos= document.getElementById("dos");
    let tres= document.getElementById("tres");
    let cuatro= document.getElementById("cuatro");
    let cinco= document.getElementById("cinco");
    let seis= document.getElementById("seis");
    let siete= document.getElementById("siete");
    let ocho= document.getElementById("ocho");
    let nueve= document.getElementById("nueve");
    let cero= document.getElementById("cero");
    
    let sumar= document.getElementById("sumar");
    let restar= document.getElementById("restar");
    let multiplicar= document.getElementById("multiplicar");
    let dividir= document.getElementById("dividir");

    let limpiarr= document.getElementById("resetear");
    let borrar= document.getElementById("borrar");

    let igual= document.getElementById("igual");

    uno.onclick=function(e){resultado.textContent= resultado.textContent+"1";};
    dos.onclick=function(e){resultado.textContent= resultado.textContent+"2";}
    tres.onclick=function(e){resultado.textContent= resultado.textContent+"3";}
    cuatro.onclick=function(e){resultado.textContent= resultado.textContent+"4";}
    cinco.onclick=function(e){resultado.textContent= resultado.textContent+"5";}
    seis.onclick=function(e){resultado.textContent= resultado.textContent+"6";}
    siete.onclick=function(e){resultado.textContent= resultado.textContent+"7";}
    ocho.onclick=function(e){resultado.textContent= resultado.textContent+"8";}
    nueve.onclick=function(e){resultado.textContent= resultado.textContent+"9";}
    cero.onclick=function(e){resultado.textContent= resultado.textContent+"0";}


    limpiarr.onclick=function(e){
        resetear();
    }
    borrar.onclick=function(e){
      limpiar();
    }


    sumar.onclick=function(e){
      operandoa=resultado.textContent;
      operacion="+"; 
      limpiar();
    }

    restar.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="-"; 
        limpiar();
    }

   multiplicar.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="x"; 
        limpiar();
    }

    dividir.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="/"; 
        limpiar();
    }

   igual.onclick=function(e){
        operandob=resultado.textContent;
       
        resolver();
    }


    function limpiar(){
        resultado.textContent="";

    }

    function resetear(){
        resultado.textContent="";
        operandoa=0;
        operandob=0;
        operacion="";
        
    }

    function resolver(){
        let res=0;
        switch(operacion){
            case "+":
                res=parseFloat(operandoa) + parseFloat(operandob);
                break;

            case "-":
                 res=parseFloat(operandoa) - parseFloat(operandob);
                 break;

            case "x":
                  res=parseFloat(operandoa) * parseFloat(operandob);
                  break;

             case "/":
                  res=parseFloat(operandoa) / parseFloat(operandob);
                  break;
            }

            resetear();
            resultado.textContent=res;
            
            
        }
        
    }




   
   



   

