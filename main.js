let sketcher = document.querySelector('.sketcher');
sketcher.style.gridTemplateColumns = 'repeat(16, 1fr)';
sketcher.style.gridTemplateRows = 'repeat(16, 1fr)';
for(let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'green'
    sketcher.insertAdjacentElement('beforeend', square);

}
