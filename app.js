// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function mostrarNombresAmigos(elemento,lista){ // Mostrar los nombres en la pantalla
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML="";
    lista.forEach(amigo => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.innerText = amigo;
        elementoHTML.appendChild(nuevoElemento);
    });
}

function mostrarAmigoSortedo(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

function agregarAmigo(){ //Agrega amigos a la lista.
    let nombreAmigo=document.getElementById('amigo').value;
    if (nombreAmigo!==""){
        amigos.push(nombreAmigo); //Agrega elementos a la lista
        // console.log(amigos);
        mostrarNombresAmigos('#listaAmigos',amigos); 
     }
    else{
        alert("Por favor, ingresa un nombre válido.");
    }
    limpiarCaja(); //Limpia los valores ingresados en la caja
}


function limpiarCaja(){ //limpia el dato ingresado para ingresar uno nuevo
    let valorCaja= document.querySelector('#amigo').value='';

}

function sortearAmigo(){
    
    cantidadLista= amigos.length;
    if (cantidadLista !== 0){
        let indiceAleatorio = Math.floor(Math.random()*cantidadLista); 
        // console.log(indiceAleatorio)
        let nombreSorteado=amigos[indiceAleatorio];
        // console.log(nombreSorteado);
        mostrarAmigoSortedo('#resultado',`El amigo secreto sorteado es: ${nombreSorteado}`);

    }
}