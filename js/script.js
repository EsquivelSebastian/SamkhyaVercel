document.getElementById("icon_menu").addEventListener("click", show_menu);

function show_menu(){
    document.querySelector(".menu").classList.toggle("drop_down_menu")
}



window.onscroll = function(){
    var  position = window.pageYOffset || document.documentElement.scrollTop;
    var element1 = document.getElementById("icon_heart");
    var element2 = document.getElementById("icon_fire");
    element1.style.bottom = position * 0.1 + "px";
    element1.style.top = position * 0.1 + "px"; 
    element2.style.bottom = position * 0.1 + "px";
    element2.style.top = position * 0.1 + "px"; 
}