function seleccionaID(){
    const entrada= document.getElementById("entrada").value;
    document.getElementById("parrafo").innerHTML=entrada;
    document.getElementById("mensajeBoton").innerHTML="Se selecciono el botón ID";
}

document.getElementById("id").addEventListener('click',seleccionaID);

function seleccionaEtiqueta(){
    const contenido = document.getElementById("contenido");
    const entrada = contenido.getElementsByTagName("input");
    document.getElementById("parrafo").innerHTML=entrada[0].value;
    document.getElementById("mensajeBoton").innerHTML="Se selecciono el botón Etiqueta";
}

document.getElementById("etiqueta").addEventListener('click', seleccionaEtiqueta);

function seleccionaClase(){
    const contenido = document.getElementById("contenido"); /*Primero el padre*/
    const entrada = contenido.getElementsByClassName("datos");
    contenido.getElementsByClassName("p1")[0].innerHTML=entrada[0].value;
    document.getElementById("mensajeBoton").innerHTML="Se selecciono el botón Clase";

}
document.getElementById("clase").addEventListener('click', seleccionaClase);

function seleccionaSelector(){
    const entrada = document.getElementById("entrada");
    document.querySelector("div p").innerHTML = entrada.value;
    document.getElementById("mensajeBoton").innerHTML = "Se selecciono el boton Selector";
}

document.getElementById("selector").addEventListener('click', seleccionaSelector);