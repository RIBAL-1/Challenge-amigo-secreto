let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Elimina espacios innecesarios

    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte el nombre de un amigo.');
        return;
    }

    // Validar que el nombre no esté duplicado (ignorando mayúsculas/minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombreAmigo.toLowerCase())) {
        alert('Este nombre ya ha sido ingresado.');
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    // Actualizar la lista en la interfaz
    actualizarListaAmigos();
    // Limpiar el campo de entrada
    limpiarCampo();
}

// Función para limpiar el campo de entrada
function limpiarCampo() {
    document.getElementById('amigo').value = '';
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de agregar nuevos elementos

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigos() {
    // 1. Comprobar si el array amigos no está vacío
    if (amigos.length === 0) {
        alert('No hay nombres en la lista para sortear. Agrega un nombre.');
        return;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // 3. Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el amigo sorteado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultado anterior
    const li = document.createElement('li');
    li.innerHTML = `<strong>🎉 Amigo Secreto: </strong> ${amigoSorteado}`;
    resultado.appendChild(li);
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vaciar la lista de amigos
    document.getElementById('listaAmigos').innerHTML = ''; // Borra lista de amigos
    document.getElementById('resultado').innerHTML = ''; // Borra el sorteo
    limpiarCampo();
}

//para git bash git add .
//git commit -m "Actualización del proyecto"
//git push origin main