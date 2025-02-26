function mostrarComentarios(recetaId) {
    // Aquí puedes cargar los comentarios de la receta con el ID recetaId
    const modal = document.getElementById('modalComentarios');
    modal.style.display = 'block';
}

function cerrarModal() {
    const modal = document.getElementById('modalComentarios');
    modal.style.display = 'none';
}

// Cerrar modal si se hace clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('modalComentarios');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}