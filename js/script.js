document.getElementById("icon_menu").addEventListener("click", show_menu);

function show_menu(){
    document.querySelector(".menu__links").classList.toggle("none")


}

/* Captura conducta de scroll-down para cambiar clases  */

/* document.addEventListener('DOMContentLoaded', function() {
    let scrolledDown = false; // Variable de estado para controlar si se ha hecho scroll hacia abajo

    window.addEventListener('scroll', function() {
        if (!scrolledDown) {
            // Cambiar la clase del DIV aquí
            const miDiv = document.getElementById('miDiv'); // Reemplaza 'miDiv' con el ID de tu DIV
            miDiv.classList.add('nuevaClase'); // Reemplaza 'nuevaClase' con la clase que deseas agregar

            // Actualizar la variable de estado
            scrolledDown = true;
        }
    });
});
 */