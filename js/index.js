const info = document.querySelector(".info")
const infoPic = document.querySelector(".info__content-pic")
const infoTextLeft = document.querySelector(".info__text_left")
const infoTextRight = document.querySelector(".info__text_right")


const options = {
    root: null,
    rootMargin: '-200px',
    threshold: 0
}

const observer = new IntersectionObserver(function (entries, obserwer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            window.addEventListener("scroll", function () {
                if (pageYOffset > 800) {
                    info.classList.add("info_active")
                    infoPic.style.transform = "translate(0px, 0px) rotate(0deg)"
                    document.body.style.overflow = "hidden"
                    // setTimeout(function () {
                    //     document.body.style.overflow = "auto"
                    // }, 3000)
                    // if (pageYOffset > 1000) {
                    //     infoPic.style.transform = "translate(-200px, -780px) rotate(-20deg)"
                    // }
                } else {
                    info.classList.remove("info_active")
                    infoPic.style.transform = `translate(${-100 + pageYOffset / 10 + 20}px, ${800 - pageYOffset / 1.1 - 72.7}px) rotate(${20 - pageYOffset / 45 - 2}deg)`
                    infoTextLeft.style.transform = `translateX(${-100 + pageYOffset / 10}%)`
                    infoTextRight.style.transform = `translateX(${100 - pageYOffset / 10}%)`
                }
            })
            // info.addEventListener("scroll", function (e) {
            //     if (e.detail == 'down') {
            //         info.scrollTop += 50
            //         console.log(e)
            //     }
            //     window.onscroll = function (evt) {
            //         if (info.scrollTop < 190) {
            //             window.scrollTo(0, 0);
            //             let event = new Event("scroll");
            //             event.detail = 'down';
            //             info.dispatchEvent(event);
            //         }
            //     }
            // })
        }
        console.log(entry)
    })
}, options)

observer.observe(info);



