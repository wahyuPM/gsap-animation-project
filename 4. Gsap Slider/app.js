const btnRight = document.querySelector('.btn-next')
const btnLeft = document.querySelector('.btn-prev')
const container = document.querySelector('.container')
const slides = Array.from(document.querySelectorAll('.slide'))
const indexIndication = document.querySelector('.counter span:nth-child(1)')
let index = 0

function animRight() {
    const TLRIGHT = gsap.timeline()

    TLRIGHT
        .set(indexIndication, {
            innerText: index + 1
        })
        .to(slides[index], { duration: 0.6, x: 0 })
}

function animLeft() {
    const TLLEFT = gsap.timeline()

    TLLEFT
        .set(indexIndication, {
            innerText: index
        })
        .to(slides[index], { duration: 0.6, x: '-100%' })
}

function negation() {
    gsap.to(container, {
        keyframes: [
            { duration: 0.1, x: -4 },
            { duration: 0.1, x: 4 },
            { duration: 0.1, x: -4 },
            { duration: 0.1, x: 0 },
        ]
    })
}

function handleDirection(direction) {
    if (direction === 'next') {
        if (index === slides.length - 1) {
            negation()
            return
        }
        index++
        animRight()
    } else if (direction === 'prev') {
        if (index === 0) {
            negation()
            return
        }

        animLeft()
        index--
    }
}

btnRight.addEventListener('click', () => {
    handleDirection('next')
})

btnLeft.addEventListener('click', () => {
    handleDirection('prev')
})