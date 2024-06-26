// Cambio de imágenes
document.addEventListener('DOMContentLoaded', function() {
    const empresaImg = document.getElementById('empresaImg');
    const imgList = ['img/empresa1.jpg', 'img/empresa2.jpg', 'img/empresa3.jpg', 'img/empresa4.jpg', 'img/empresa5.jpg', 'img/empresa6.jpg', 'img/empresa7.jpg', 'img/empresa8.jpg', 'img/empresa9.jpg', 'img/empresa10.jpg']; // Lista de imágenes sin repetir la primera

    let currentImgIndex = 0;

    // Función para cambiar la imagen
    function changeImage() {
        currentImgIndex = (currentImgIndex + 1) % imgList.length; // Cambia al siguiente índice de imagen
        empresaImg.src = imgList[currentImgIndex]; // Cambia la fuente de la imagen
    }

    // Evento de clic en la imagen para cambiarla
    empresaImg.addEventListener('click', changeImage);

    // Mensaje de bienvenida
    alert("¡Bienvenidos a Premium Motors Cajeme!");

    // Evento submit del formulario
    const formulario = document.getElementById('formularioContacto');
    formulario.addEventListener('submit', function(event) {
        // Verificar si hay campos vacíos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!nombre || !email || !asunto || !mensaje) {
            // Mostrar alerta si hay campos vacíos
            alert('Por favor, completa todos los campos del formulario.');
            event.preventDefault(); // Prevenir el envío del formulario
        }
    });

});

// Función para iniciar y actualizar el reloj
function iniciarReloj() {
    function actualizarReloj() {
        const ahora = new Date();
        const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const fecha = ahora.toLocaleDateString('es-ES', opcionesFecha);
        const hora = ahora.toLocaleTimeString('es-ES', { hour12: false });

        const reloj = document.getElementById('reloj');
        if (reloj) {
            reloj.textContent = `${fecha} - ${hora}`;
        }
    }

    // Actualiza el reloj cada segundo (1000 ms)
    setInterval(actualizarReloj, 1000);

    // Llama a la función una vez para inicializar
    actualizarReloj();
}

// Espera a que el DOM se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Inicializa y actualiza el reloj en el footer
    iniciarReloj();
});