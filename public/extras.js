const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a', 'Enter'
];
var current = 0;

document.addEventListener('keydown', function (event) {
    
	if (konamiCode.indexOf(event.key) < 0 || event.key !== konamiCode[current]) {
		current = 0;
		return;
	}

	current++;

	if (konamiCode.length === current) {
		current = 0;
        doMagicStuff();
	}

}, false);

const sections = document.getElementsByTagName("section")
let rotateVal = "rotate(0.5turn)";

function doMagicStuff() {
    for (let section of sections) {
        section.style.transitionDuration = "1s";
        section.style.transform = rotateVal;
    }

    rotateVal = (rotateVal == "rotate(0.5turn)") ? "" : "rotate(0.5turn)"
}

const toAnimateElements = document.querySelectorAll('.s');
toAnimateElements.forEach(e => {
    e.classList.add(!isInViewport(e) ? 's-off' : 's-on')
    e.classList.remove(isInViewport(e) ? 's-off' : 's-on')
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom - element.offsetHeight*0.5 <= (window.innerHeight || document.documentElement.clientHeight)  &&
        rect.top - element.offsetHeight*-0.5 >= 0
    );
}

document.addEventListener('scroll', (n => {
    toAnimateElements.forEach(e => {
        e.classList.add(!isInViewport(e) ? 's-off' : 's-on')
        e.classList.remove(isInViewport(e) ? 's-off' : 's-on')
    });
}))