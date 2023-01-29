function encriptar(texto) {
    // Creamos un diccionario para almacenar las sustituciones
    const diccionario = {
        e: 'enter',
        i: 'imes',
        a: 'ai',
        o: 'ober',
        u: 'ufat'
    };
    // Inicializamos una variable para almacenar el texto encriptado
    let encriptado = '';
    // Iteramos sobre cada caracter del texto original
    for (const caracter of texto) {
    // Si el caracter se encuentra en el diccionario, agregamos su versión encriptada al resultado
        if (caracter in diccionario) {
            encriptado += diccionario[caracter];
        } else {
        // Si el caracter no se encuentra en el diccionario, simplemente agregamos el caracter original al resultado
            encriptado += caracter;
        }
    }
    // Devolvemos el texto encriptado
    return encriptado;
}
function desencriptar(texto) {
    // Creamos un diccionario para almacenar las sustituciones
    const diccionario = {
        enter: 'e',
        imes: 'i',
        ai: 'a',
        ober: 'o',
        ufat: 'u'
    };
    let desencriptado = '';
    let i = 0;
    while (i < texto.length) {
        // Verificamos si el caracter actual es el inicio de una palabra encriptada
        let encontrado = false;            
        for (const palabra in diccionario) {
            if (texto.startsWith(palabra, i)) {
            desencriptado += diccionario[palabra];
            i += palabra.length;
            encontrado = true;
            break;
            }
        }        
        if (!encontrado) {
            desencriptado += texto[i];
            i++;
        }
    }
    return desencriptado;
}
function copiarTexto(){
    var contenido = document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(contenido);
    swal("Genial!","Tu texto fue copiado", 'success');
}
function contieneMayuscula(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
        return true;
        }
    }
    return false;
}
function revisarTextoVacio(texto){
    if (texto == "" || texto == " "){
        swal("ups!", "no se encontro texto :(", 'warning')
}
}
function alPrecionarEncriptar(){  
    var texto
    texto = tomarTexto();
    revisarTextoVacio(texto);
    if (contieneMayuscula(texto)== true){
        swal('Por favor', "ingrese solo minusculas", 'warning')
    }
    else{
        ocultarAdelante();
        resultado.textContent = encriptar(texto);
    }
}
function alPrecionarDesencriptar(){
    var textoParaDesencriptar
    textoParaDesencriptar = tomarTexto();
    revisarTextoVacio(textoParaDesencriptar);
    if (contieneMayuscula(textoParaDesencriptar)== true){
        swal('Por favor', "ingrese solo minusculas", 'warning')
    }
    else{    
        ocultarAdelante();
        resultado.textContent = desencriptar(textoParaDesencriptar);
    }
}
function tomarTexto(){
    var texto = document.querySelector(".areaTexto");
    return texto.value;
}
function ocultarAdelante(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}
const botonCopiar = document.querySelector(".botonCopiar"); 
const btnEncriptar = document.querySelector(".botonEncriptar");
const btnDesencriptar = document.querySelector(".botonDesencriptar");
var muneco = document.querySelector(".contenedorMuneco");
var h3 = document.querySelector(".contenedorH3");
var parrafo = document.querySelector(".contenedorParrafo");
var resultado = document.querySelector(".textoResultado");

btnEncriptar.onclick = alPrecionarEncriptar;
btnDesencriptar.onclick= alPrecionarDesencriptar;
botonCopiar.onclick= copiarTexto;