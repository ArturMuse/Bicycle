const info = document.querySelector(".info")

const options = {
    root: null,
    rootMargin: '200px 0px 0px 0px',
    threshold: 0
}

const obserwer = new IntersectionObserver(function (entries, obserwer) {
    entries.forEach(entry => {
        console.log(entry)
    })
}, options)

observer.observe(info);