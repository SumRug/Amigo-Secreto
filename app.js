// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Crear una variable para añadir los nombres de los amigos.
// y un regex para validar que sean nombres -
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let amigos = [];
let lista = document.getElementById("listaAmigos")
const validacion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/u;


// :::::::::::::
//   BOTONES   
// :::::::::::::

// ::::::: función del boton agregar amigo ::::::::::::
function agregarAmigo() {
    // agregar funcion de validar amigos
    validarAgregarAmigos();

    //agregar funcion de actualizar lista 
    actualizarListaAmigos();
}


// ::::::: función del boton sortear amigo ::::::::::::
function sortearAmigo(){
    //verifica si amigos tiene algun dato con el tamaño
    if(amigos.length == 0 ){
        alert(`Agregue un nombre para sortear`)
        return;
    }
      if(amigos.length == 1 ){
        alert(`Agregue más de un nombre para sortear`)
        return;
    }
    //si si tiene un dato, se usa Math para generrar un nombre aleatorio
   console.log(amigos.length) 
    let indiceAletorio = Math.floor(Math.random()*amigos.length);
    resultado = document.getElementById("resultado");
    limpiar();
    //agrega el nombre 
    resultado.innerHTML = "Tu amigo secreto es : " +amigos[indiceAletorio];

}



// :::::::::::::
//   FUNCIONES   
// :::::::::::::

// Función para habilitar la opcion de agregar amigos 
function validarAgregarAmigos() {
    // recolecta el valor de amigo
    let nombreAmigo = document.getElementById("amigo").value.trim();
    // verifica si es un nombre valido con : -regex, -espacios vacios, -minimo 3 letras
    if (!validacion.test(nombreAmigo) || nombreAmigo.length < 3) {
        alert(`El nombre no puede estar vacío, debe tener al menos 3 letras y no puede contener números.`);
        return
    }

    //verificar que los amigos ya estan en la lista
      if (amigos.includes(nombreAmigo)) {
        alert(`No puede repetir el mismo nombre.`);
        return
    }
    //agrega el nombre de amigos al arreglo y limpia el input 
    amigos.push(nombreAmigo);
    limpiar();
 
}

//Funcion para actualizar lista de amigos
function actualizarListaAmigos() {
     let textoLista = "";
    for (let i = 0; i < amigos.length; i++) {
         textoLista += "<li>" + amigos[i] + "</li>";
    }
    return lista.innerHTML = textoLista;
}

//limpia la caja del input y de la lista
function limpiar (){
       lista.innerHTML= "";
       document.getElementById("amigo").value = "";
}



