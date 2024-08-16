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

    const textoEncriptar = encriptar(textoIngreso.value); //textoIngreso pasa el contenido a textoEncriptar.
    textoEncriptado.value = textoEncriptar;
    textoIngreso.value="";
    textoEncriptado.style.backgroundImage= "none";
}

function encriptar(stringEncriptada) {                                              // StringEncriptada tiene el contenido de textAra 
    
    let matrizCodigo= [["e", "enter"], ["i","imes"], ["a", "ai",],["o", "ober"], ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

    let i=0
    for(  i=0; i < matrizCodigo.length; i++){
          
        if(stringEncriptada.includes(matrizCodigo[i][0])){                          // Revisa si hay caracteres  iguales al contenido en el índice i, posición 0, de la matríz.


            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);  // ENCRIPTACIÓN: Reemplaza en el texto todos los
        }                                                                                           //  caracteres que se encuentran en el índice i, posición 0,
    }    
    console.log(`stringEncriptada: ${stringEncriptada}`);                                                                                        // por los caracteres que se encuentran en el índice i, posición 1.
    return stringEncriptada;                                                        // pasa el valor de retorno a la llamada del  botonEncriptar 
}

function btnDesencriptar(){

    const textoEncriptar = desencriptar(textoIngreso.value);
    textoEncriptado.value= textoEncriptar;
    textoIngreso.value="";
   
}

function desencriptar(stringEncriptada){

    let matrizCodigo= [["e", "enter"], ["i","imes"], ["a", "ai",],["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    let i= 0

    for (i=0; i < matrizCodigo.length; i++){ 

        if(stringEncriptada.includes(matrizCodigo[i][1])){

            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringEncriptada;
}

function btnCopiar() {

    let stringEncriptada= document.querySelector(".texto-encriptado");
    stringEncriptada.select();
    stringEncriptada.setSelectionRange(0,99999);  // versiones móbiles

    navigator.clipboard.writeText(stringEncriptada.value).then(function() {
            alert("¡Texto copiado al clipboard!");
    }).catch(function(error){
        console.error(`Falló la copia: ${error}`)
    })
}

