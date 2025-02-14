// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Elimina espacios innecesarios

    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte el nombre de un amigo');
    } else {
        // Agregar el nombre al array
        amigos.push(nombreAmigo);
        // Actualizar la lista en la interfaz
        actualizarListaAmigos(amigos);
    }
    limpiarCampo();
}

// Función para limpiar el campo de entrada
function limpiarCampo() {
    document.getElementById('amigo').value = '';
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos(amigos) {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de agregar nuevos elementos

   for (let i = 0; i <amigos.length; i++){
    const li = document.createElement('li');
    li.textContent = amigos[1];
    lista.appendChild(li);
   }
}

//función para sortear los amigos
function sortearAmigos(){
// 1. comprobar si el array amigos no está vacio
if (amigos.length === 0){
    alert('No hay nombres en la lista para sortear,', 'agraga un nombre');
    return;
}
// genera un índice aleatorio
const indiceAleatorio = Math.floor(Math.random()*amigos.length)
// obtenere el nombre sorteado
const amigoSorteado = amigos[indiceAleatorio];
//Mostrar el amigo sorteado en el HTML

}
