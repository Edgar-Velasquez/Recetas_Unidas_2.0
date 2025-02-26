function mostrarVistaPrevia(event) {
    const input = event.target;
    const vistaPrevia = document.getElementById('vistaPrevia');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            vistaPrevia.innerHTML = `<img src="${e.target.result}" alt="Vista previa de la imagen">`;
        }

        reader.readAsDataURL(input.files[0]);
    } else {
        vistaPrevia.innerHTML = '';
    }
}