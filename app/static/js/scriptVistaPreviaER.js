function mostrarVistaPrevia(event) {
    const vistaPrevia = document.getElementById('vistaPrevia');
    const archivo = event.target.files[0];
    const lector = new FileReader();
    lector.onload = function(e) {
        vistaPrevia.innerHTML = `<img src="${e.target.result}" alt="Vista previa" style="max-width: 40%; height: auto;">`;
    }
    lector.readAsDataURL(archivo);
}