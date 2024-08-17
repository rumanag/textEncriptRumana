const textoIngreso = document.querySelector( " .texto-ingreso");
const textoEncriptado = document.querySelector(" .texto-encriptado");

/*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
    const textoValidar = document.querySelector( " .texto-ingreso");
   
    // validacion de los caracteres del texto

    regex = /^[a-z]+$/;
    
    if ( regex.test(textoValidar.value)){  
        const textoEncriptar = encriptar(textoIngreso.value); //textoIngreso pasa el contenido a textoEncriptar.
        textoEncriptado.value = textoEncriptar;
    }   
    else{
         alert("El texto contiene caracteres no aceptados o está en blanco");
         textoEncriptado.style.backgroundImage= " url('./assets/imagenBuscar.png')";
         var h3Oculto = document.querySelector(".informacion1 ").style.visibility="visible";
         var pOculto = document.querySelector(".headH6 ").style.visibility="visible";   
         textoEncriptado.value="";
        }  
}

function encriptar(stringEncriptada) {                                              // StringEncriptada tiene el contenido de textAra 
    
    // valida los datos ingresados

    let matrizCodigo= [["e", "enter"], ["i","imes"], ["a", "ai",],["o", "ober"], ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

    let findEncriptados = 0;
    let i=0;
    
    /*  Revisa si hay caracteres  iguales al contenido en el índice i, posición 0, de la matríz. 
        ENCRIPTACIÓN: Reemplaza en el texto todos los caracteres que se encuentran en el índice i, posición 0,   
                                              por los caracteres que se encuentran en el índice i, posición 1. 
    */

    for(  i=0; i < matrizCodigo.length; i++){
          
        if(stringEncriptada.includes(matrizCodigo[i][0])){                          
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);  
            findEncriptados = 1;                                                                      
        }                                                                                            
    } 
    /* Si no hay caracteres para encriptar, retorna
    */
   
    if (findEncriptados == 0) {

        alert("No se encontraron caracteres para encriptar");
        textoEncriptada.value="";
        textoEncriptado.style.backgroundImage= " url('./assets/imagenBuscar.png')";
        var h3Oculto = document.querySelector(".informacion1 ").style.visibility="visible";
        var pOculto = document.querySelector(".headH6 ").style.visibility="visible";        
   
    }   else {

            textoIngreso.value="";
            textoEncriptado.style.backgroundImage= (" none");
            var h3Oculto = document.querySelector(".informacion1 ").style.visibility="hidden";
            var pOculto = document.querySelector(".headH6 ").style.visibility="hidden"; 
    }
       
    return stringEncriptada;                                                                         // pasa el valor de retorno a la llamada del  botonEncriptar 
}

function btnDesencriptar(){
    const textoValidar = document.querySelector( " .texto-ingreso");
   
    // validacion de los caracteres del texto

    regex = /^[a-z]+$/;
    
    if ( regex.test(textoValidar.value)){ 
        const textoEncriptar = desencriptar(textoIngreso.value); //textoIngreso pasa el contenido a textoEncriptar.
        textoEncriptado.value = textoEncriptar;
    }   
    else{
         alert("El texto contiene caracteres no aceptados o está en blanco");
         textoEncriptado.style.backgroundImage= " url('./assets/imagenBuscar.png')";
         var h3Oculto = document.querySelector(".informacion1 ").style.visibility="visible";
         var pOculto = document.querySelector(".headH6 ").style.visibility="visible";  
         textoEncriptado.value="";
        }  
}

function desencriptar(stringEncriptada) {

    let matrizCodigo= [["e", "enter"], ["i","imes"], ["a", "ai",],["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    let findEncriptados = 0;
    let i= 0;
   
    for (i=0; i < matrizCodigo.length; i++) {

        if( stringEncriptada.includes(matrizCodigo[i][1])) {                              
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            findEncriptados =1 ;                                     
        }   
    }

    if (findEncriptados == 0) {

            alert("No se encontraron caracteres encriptados");
            stringEncriptada="";
            textoEncriptado.style.backgroundImage= " url('./assets/imagenBuscar.png')";
            var h3Oculto = document.querySelector(".informacion1 ").style.visibility="visible";
            var pOculto = document.querySelector(".headH6 ").style.visibility="visible"; 

        }   else {

            textoIngreso.value ="";
            textoEncriptado.style.backgroundImage =(" none");
            var h3Oculto = document.querySelector(".informacion1 ").style.visibility="hidden";
            var pOculto = document.querySelector(".headH6 ").style.visibility="hidden"; 
    }
    return stringEncriptada;
  
} 


function btnCopiar() {

    let stringEncriptada= document.querySelector(".texto-encriptado");

    if (stringEncriptada.value == "") {
       
        alert("no hay encriptación para copiar");
    }   else {
            stringEncriptada.select();
            stringEncriptada.setSelectionRange(0,99999);  // versiones móbiles
        
            navigator.clipboard.writeText(stringEncriptada.value).then(function() {
                    alert("¡Texto copiado al clipboard!");
                    textoEncriptado.value="";
                    textoIngreso.value="";
                    textoEncriptado.style.backgroundImage= " url('./assets/imagenBuscar.png')";
                    var h3Oculto = document.querySelector(".informacion1 ").style.visibility="visible";
                    var pOculto = document.querySelector(".headH6 ").style.visibility="visible"; 
        
            }).catch(function(error){
                    alert(`Falló la copia: ${error}`);
        })
    }
}
