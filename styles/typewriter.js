const typewriters = document.getElementsByClassName("tp");
const speed = 100;

// Parsing by order
function getOrder(elem) {
    return parseInt(elem.getAttribute('order'))
}

const sorted = [...typewriters].sort((a, b) => getOrder(a) - getOrder(b))
let toUse = sorted.map(e => {
    return {
        element: e,
        inner: e.innerHTML
    }
});
console.log(toUse)

const delay = ms => new Promise(res => setTimeout(res, ms));

async function typeWriter(obj) {
    
    const type = obj.element;
    const text = obj.inner;
    const textLn = text.length;
    
    for (let i = 0; i < textLn; i++) {
        type.innerHTML += text[i];
        await delay(speed);
    } 
}

async function typeWriterArr(obj) {

    const type = obj.element;
    const lines = obj.inner.split("|");

    for (let j = 1; j <= lines.length; j++) {
        const textLn = lines[j-1].length;
        
        for (let i = 0; i < textLn; i++) {
            type.innerHTML += lines[j-1][i];
            await delay(speed);
        } 

        await delay(2000);

        for (let i = 0; i <= textLn; i++) {
            type.innerHTML = type.innerHTML.slice(0, lines[j-1].length - i) ;
            await delay(speed/3);
        } 

        await delay(500);

        const isLoop = type.classList.contains("tp-loop");
        isLoop ? j = j % (lines.length) : null;

    }

}

async function run() {

    for (let writer of toUse) {
        writer.element.innerHTML = "";
    }

    for (let writer of toUse) {
        const isArray = writer.element.classList.contains("tp-or");
        isArray ? typeWriterArr(writer) : typeWriter(writer);
    
        await delay(500);
    }    
}

run()