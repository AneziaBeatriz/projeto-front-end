let elem_preloader = document.getElementById ("preloader");
let elem_loader = document.getElementById ("loader");
console.log ("Testing...Ok");

setTimeout(function() {
    elem_preloader.classList.remove("preloader");
    elem_loader.classList.remove("loader");
    }, 1280)


function openNav(){
    document.getElementById("myNav").style.width = '15%';
    
}

function closeNav(){
    document.getElementById("myNav").style.width = '0%';
}