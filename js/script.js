document.getElementById("icon_menu").addEventListener("click", show_menu);

function show_menu(){
    document.querySelector(".menu__links").classList.toggle("none")


}

document.addEventListener('DOMContentLoaded', function() {
    var miAudio = document.getElementById('audio');
    
    miAudio.addEventListener('canplay', function() {
      miAudio.volume = 0.0333; // Cambia este valor según el volumen que desees (entre 0 y 1)
      miAudio.playAudio();
    });
  });


