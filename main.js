let drawColor = 'black';
let click = true;

function createSketcher(size) {
    let sketcher = document.querySelector('.sketcher');
    let clearSquares = sketcher.querySelectorAll('div')
    clearSquares.forEach((div) => div.remove());
    sketcher.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketcher.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white'
        sketcher.insertAdjacentElement('beforeend', square);

    }
}

function changeGridSize(input) {
    if(input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = 'none';
        createSketcher(input);
    } else {
        document.querySelector('.error').style.display = 'flex';
    }  
}

function colorSquare() {
    if(click) {
        if (drawColor === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = drawColor;
        }
    }
}

function changeColor(colorChoice) {
    drawColor = colorChoice;
}

function resetSketcher() {
    let sketcher = document.querySelector('.sketcher');
    let clearSquares = sketcher.querySelectorAll('div')
    clearSquares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = 'Mode: Drawing';
        } else {
            document.querySelector('.mode').textContent = 'Mode: Not Drawing';
        }
    }
});


document.querySelector('.error').style.display = 'none';
createSketcher(16);