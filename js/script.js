document.getElementById("icon_menu").addEventListener("click", show_menu);

function show_menu(){
    document.querySelector(".menu__links").classList.toggle("none")


}

function playAudio(){
    let sound = document.getElementById("audio")
    sound.volume(0.333);
    sound.addEventListener("onload").playAudio();

}
