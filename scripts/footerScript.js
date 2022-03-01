function windowWidthFooter() {

    var footer = document.querySelector('[footer]')

    windowWidth = window.innerWidth

    function removeClass() {
        footer.classList.remove('footer_Position')
    }

    if (windowWidth <= 900) {
        removeClass()
    }

    window.addEventListener('resize', () => {
        windowWidth = window.innerWidth
        if (windowWidth <= 900) {
            removeClass()
        } if(windowWidth >= 900) {
            footer.classList.add('footer_Position')
        }


    })
}

window.onload = windowWidthFooter()