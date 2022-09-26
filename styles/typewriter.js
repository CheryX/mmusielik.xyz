const typewriters = document.getElementsByClassName("tp");
const speed = 100;

const getOrder = (elem) => parseInt(elem.getAttribute('order'));
const delay = ms => new Promise(res => setTimeout(res, ms));

const sorted = [...typewriters].sort((a, b) => getOrder(a) - getOrder(b))
let toUse = sorted.map(e => ({ element: e, inner: e.innerHTML }));

async function typeWriter(obj) {

    const text = obj.inner;
    for (let i = 0; i < text.length; i++) {
        obj.element.innerHTML += text[i];
        await delay(speed);
    } 

}

async function typeWriterArr(obj) {

    const lines = obj.inner.split("|");

    for (let j = 1; j <= lines.length; j++) {
        const textLn = lines[j-1].length;
        
        for (let i = 0; i < textLn; i++) {
            obj.element.innerHTML += lines[j-1][i];
            await delay(speed);
        } 

        await delay(2000);

        for (let i = 0; i <= textLn; i++) {
            obj.element.innerHTML = obj.element.innerHTML.slice(0, lines[j-1].length - i) ;
            await delay(speed/3);
        } 

        await delay(500);

        const isLoop = obj.element.classList.contains("tp-loop");
        isLoop && (j = j % lines.length);

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
};

run()