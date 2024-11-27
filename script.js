

// Create 16x16 grid
const container = document.querySelector('.container');
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row')
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        row.appendChild(square);
    }
    container.appendChild(row);
}
