const toAnimateElements = document.querySelectorAll('.s');
toAnimateElements.forEach(e => {
    e.classList.add(!isInViewport(e) ? 's-off' : 's-on')
    e.classList.remove(isInViewport(e) ? 's-off' : 's-on')
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom - element.offsetHeight*0.4 <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

document.addEventListener('scroll', (n => {
    toAnimateElements.forEach(e => {
        e.classList.add(!isInViewport(e) ? 's-off' : 's-on')
        e.classList.remove(isInViewport(e) ? 's-off' : 's-on')
    });
}))