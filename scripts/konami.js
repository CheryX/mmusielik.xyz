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

    await customAlert("Inpending doom approaches...")
    
    for (let section of sections) {
        section.style.transform = rotateVal;
    }

    rotateVal = (rotateVal == "rotate(0.5turn)") ? "" : "rotate(0.5turn)"

    await customAlert("nice")
}