function createSketcher(size) {
    let sketcher = document.querySelector('.sketcher');
    let squares = sketcher.querySelectorAll('div')
    squares.forEach((div) => div.remove());
    sketcher.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketcher.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'green'
        sketcher.insertAdjacentElement('beforeend', square);

    }
}

createSketcher(16);

function changeGridSize(input) {
    if(input >= 2 && input <= 100) {
        createSketcher(input);
    } else {
        alert("Enter a number between 2 and 100.")
    }
    
}
