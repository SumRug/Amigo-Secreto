// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Crear una variable para añadir los nombres de los amigos.
// y un regex para validar que sean nombres -
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let amigos = [];
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




// :::::::::::::
//   FUNCIONES   
// :::::::::::::

// Función para habilitar la opcion de agregar amigos 
function validarAgregarAmigos() {
    // recolecta el valor de amigo
    let nombreAmigo = document.getElementById("amigo").value
    // verifica si es un nombre valido con : -regex, -espcios vacios, -minimo 3 letras
    if (!validacion.test(nombreAmigo) || nombreAmigo === "" || nombreAmigo.length < 3) {
        alert(`El nombre no puede estar vacío, debe tener al menos 3 letras y no puede contener números.`);
        return
    }
    //agrega el nombre de amigos al arreglo y limpia el input 
    amigos.push(nombreAmigo);
    document.getElementById("amigo").value = " ";
}

//Funcion para actualizar lista de amigos
function actualizarListaAmigos() {
    let textoLista = "";
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        textoLista += "<li>" + amigos[i] + "</li>";
    }
    return lista.innerHTML = textoLista;
}





