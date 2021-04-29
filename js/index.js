const info = document.querySelector(".js-info")
const infoPic = document.querySelector(".js-pic")
const infoTextLeft = document.querySelector(".js-text-left")
const infoTextRight = document.querySelector(".js-text-right")


const options = {
    root: null,
    rootMargin: '-200px',
    threshold: 0
}

const state = {
    lastScrollPosition: 800
}

const observer = new IntersectionObserver(function (entries, obserwer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            window.addEventListener("scroll", function () {
                let currentScroll = window.pageYOffset;
                info.classList.remove("info_active")
                infoPic.style.transform = `translate(${-100 + pageYOffset / 10 + 20}px, ${800 - pageYOffset / 1.1 - 72.7}px) rotate(${20 - pageYOffset / 45 - 2}deg)`
                infoTextLeft.style.transform = `translateX(${-100 + pageYOffset / 10}%)`
                infoTextRight.style.transform = `translateX(${100 - pageYOffset / 10}%)`
                // Вниз
                if (currentScroll > state.lastScrollPosition) {
                    if (currentScroll < 1000 && currentScroll > 800) {
                        info.classList.add("info_active")
                        infoPic.style.transform = "translate(0px, 0px) rotate(0deg)"
                    } else {

                    }
                }
                // Вверх
                if (currentScroll <= state.lastScrollPosition) {

                }



                // if (pageYOffset > 800) {
                //     info.classList.add("info_active")
                //     infoPic.style.transform = "translate(0px, 0px) rotate(0deg)"
                //     // document.body.style.overflow = "hidden"
                //     // setTimeout(function () {
                //     //     document.body.style.overflow = "auto"
                //     // }, 3000)
                //     // if (pageYOffset > 1000) {
                //     //     infoPic.style.transform = "translate(-200px, -780px) rotate(-20deg)"
                //     // }
                // } else {
                //     info.classList.remove("info_active")
                //     infoPic.style.transform = `translate(${-100 + pageYOffset / 10 + 20}px, ${800 - pageYOffset / 1.1 - 72.7}px) rotate(${20 - pageYOffset / 45 - 2}deg)`
                //     infoTextLeft.style.transform = `translateX(${-100 + pageYOffset / 10}%)`
                //     infoTextRight.style.transform = `translateX(${100 - pageYOffset / 10}%)`
                // }
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



