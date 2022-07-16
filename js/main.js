let button = document.querySelectorAll('.menu-burger');
button.forEach(btn => {
    btn.addEventListener("click", clickHandler);
})

function clickHandler() {
    document.querySelector(".menu-burger").classList.toggle('active');
    document.querySelector(".menu-nav").classList.toggle('menuActive');
    
}