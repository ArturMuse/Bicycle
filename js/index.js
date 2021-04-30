const info = document.querySelector(".js-info")
const infoVideo = document.querySelector(".js-video")
const infoTextLeft = document.querySelector(".js-text-left")
const infoTextRight = document.querySelector(".js-text-right")


const options = {
    root: null,
    rootMargin: '-200px',
    threshold: 0
}

const state = {
    lastScrollPosition: 800,
    secondScrollPosition: 1200
}

const observer = new IntersectionObserver(function (entries, obserwer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            window.addEventListener("scroll", function () {
                let currentScroll = window.pageYOffset;
                console.log(currentScroll)
                // Вниз
                if (currentScroll > state.lastScrollPosition) {
                    info.classList.add("info_active")
                    infoVideo.style.transform = "translate(0px, 0px) rotate(0deg)"
                    // Вторая секция
                    if (currentScroll > state.secondScrollPosition) {
                        infoTextLeft.classList.add("info__text_left-off")
                        infoTextRight.classList.add("info__text_right-off")
                        infoTextLeft.style.transform = `translate(-100%)`
                        infoTextRight.style.transform = `translate(100%)`
                        infoVideo.style.transform = `translate(89.55px, -814.064px) rotate(-19.6778deg)`
                        setTimeout(() => {
                            infoTextLeftSecond.classList.add("info__text_left-on")
                            infoTextRightSecond.classList.add("info__text_right-on")
                        }, 5000)
                    }
                } else {
                    info.classList.remove("info_active")
                    infoTextLeft.classList.remove("info__text_left-off")
                    infoTextRight.classList.remove("info__text_right-off")
                    infoVideo.style.transform = `translate(${-100 + pageYOffset / 10 + 20}px, ${800 - pageYOffset / 1.1 - 72.7}px) rotate(${20 - pageYOffset / 45 - 2}deg)`
                    infoTextLeft.style.transform = `translateX(${-100 + pageYOffset / 10}%)`
                    infoTextRight.style.transform = `translateX(${100 - pageYOffset / 10}%)`
                }
            })

        }
        console.log(entry)
    })
}, options)

observer.observe(info);



