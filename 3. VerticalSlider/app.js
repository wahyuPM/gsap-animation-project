window.addEventListener('load', animation)

function animation() {
    const TL = gsap.timeline({ repeat: -1 })

    TL.from('.vertical-slider p', { y: 100, autoAlpha: 0, duration: 0.75, stagger: 0.75 }) //stagger berfungsi untuk mengatur delay antara tiap animasi
        .to('.vertical-slider p', {
            y: -100, autoAlpha: 0, duration: 0.75, stagger: 0.75
        }, 0.75) // animasi akan mulai tepat setelah 0.75s setelah animasi sebelumnya
};