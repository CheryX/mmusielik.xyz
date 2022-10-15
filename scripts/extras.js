const alertText = document.getElementById("alertContent");
const alertBg = document.getElementById("alertBg");

async function customAlert(message) {

    alertText.innerText = message;
    alertBg.style.opacity = 1.0;

    await delay(message.length * 100 + 2000);

    alertBg.style.opacity = 0.0;

}

const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a', 'Enter'
];
var current = 0;

document.addEventListener('keydown', async function (event) {
    
	if (konamiCode.indexOf(event.key) < 0 || event.key !== konamiCode[current]) {
		current = 0;
		return;
	}

	current++;

	if (konamiCode.length === current) {
		current = 0;
        await doMagicStuff();
	}

}, false);

const sections = document.getElementsByTagName("section")
let rotateVal = "rotate(0.5turn)";

async function doMagicStuff() {
    for (let section of sections) {
        section.style.transitionDuration = "1s";
    }    

    await customAlert("Impending doom approaches...")
    
    for (let section of sections) {
        section.style.transform = rotateVal;
    }

    rotateVal = (rotateVal == "rotate(0.5turn)") ? "" : "rotate(0.5turn)"

    await customAlert("nice")
}

const toAnimateElements = document.querySelectorAll('.show-on-scroll');
toAnimateElements.forEach(e => {
    e.style.opacity = !isInViewport(e) ? '0' : '1';
    e.style.transform = !isInViewport(e) ? 'translateY(20px)' : 'translateY(0px)';
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom - element.offsetHeight*0.5 <= (window.innerHeight || document.documentElement.clientHeight)  &&
        rect.top - element.offsetHeight*0.5 >= 0
    );
}

document.addEventListener('scroll', (n => {
    toAnimateElements.forEach(e => {
        e.style.opacity = !isInViewport(e) ? '0' : '1';
        e.style.transform = !isInViewport(e) ? 'translateY(20px)' : 'translateY(0px)';
    });
}))

    
