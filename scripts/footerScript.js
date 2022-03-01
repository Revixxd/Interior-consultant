function windowWidthFooter() {

    var footer = document.querySelector('[footer]')
    
    windowWidth = window.innerWidth
    function addClass() {

        footer.classList.remove('footer_Position')
    }

    
    if (windowWidth <= 900) {
        addClass()
    }

    window.addEventListener('resize', () => {

        if (windowWidth <= 900) {
            addClass()
        } else {
            footer.classList.add('footer_Position')
        }


    })
}

window.onload = windowWidthFooter()