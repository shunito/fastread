export default function dispLines() {
    const result = document.getElementById('result');
    const fontSize = document.getElementById('fontsizeSelect').value;
    const wordsByLine = document.getElementById('wordsByLineSelect').value;
    const baseLine = document.getElementById('baseLineSelect').value;
    const addTopValue = fontSize / 100 * baseLine;

    result.classList.remove('hide');
    result.style.height = "";
    result.style.fontSize = `${fontSize}px`;

    if( wordsByLine === 'full' ){
        result.style.width = "100%";
    }
    else{
        let stageWidth = Number(fontSize) * Number(wordsByLine);
        result.style.width = `${stageWidth}px`;
    }

    let line, lineWords;
    let topPosition = 0;
    let lines = result.querySelectorAll('p');
    for (line of lines) {
        lineWords = line.querySelectorAll('span');
        for (let elem of lineWords) {
            elem.style.top = `${topPosition}px`;
            topPosition += addTopValue;
        }
    }
    // Ajust Height
    const ajustHeight = result.clientHeight + topPosition - 32;
    result.style.height = `${ajustHeight}px`;
}