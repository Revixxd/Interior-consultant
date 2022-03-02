let overLay = document.querySelector(".menu_overlay")
let on = document.querySelector(".header-overLay__button")
let off = document.querySelector('.menu-overlay__button')

let contaner = document.querySelector('.container')


on.addEventListener('click', ()=>{
    overLay.style.transform = "translateY(0)"
    contaner.style.display = 'none'
})
off.addEventListener('click', ()=>{
    offOverlay()
    contaner.style.display = 'block'
})

function offOverlay(){
    overLay.style.transform = "translateY(-120%)"
}

let aButtons = document.querySelectorAll('.menu_overlay-list__button')

aButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        offOverlay()
    })
})