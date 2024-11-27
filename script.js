function createGrid(size = 16) {
    const container = document.querySelector('.container');

    // Create grid
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row')
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }

    // Set squares to highlight when passed over by mouse
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.classList.toggle('highlight');
        });
    });
}
createGrid();

// Clears and creates new grid of specified size
function updateGrid(size) {
    const container = document.querySelector('.container');
    let curNode = document.querySelector('button');
    while (curNode.nextSibling) {
        container.removeChild(curNode.nextSibling);
    }
    createGrid(size);
}

// Obtain new and update grid square count
const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    let size = prompt('Enter new grid size: ');
    updateGrid(size);
});
