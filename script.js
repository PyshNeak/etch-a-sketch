let isToggle, isRandom, isDarkening;
isToggle = isRandom = isDarkening = false;

function toggle(e) {
    e.target.style.background = 'rgba(0, 0, 0, 0.1)';
}

function random(e) {
    let c1 = Math.round(Math.random() * 255)
    let c2 = Math.round(Math.random() * 255)
    let c3 = Math.round(Math.random() * 255)
    e.target.style.background = `rgba(${c1}, ${c2}, ${c3}, 0.1)`
}

function darkening(e) {
    let orig = e.target.style.background;
    if (orig) {
        let opacity = +orig.slice(orig.length - 4, orig.length - 1);
        if (opacity < 1) {
            opacity += 0.1;
        }

        e.target.style.background = orig.slice(0, orig.length - 4) + opacity + ')';
    }
}

function setGridFunctionality(functionality='toggle') {
    console.log(functionality)
    const squares = document.querySelectorAll('.grid-square');
    let func;
    removeGridFunctionality();
    switch (functionality) {
        case 'toggle':
            isToggle = true;
            func = toggle;
            //squares.forEach((square) => {
            //    square.addEventListener('mouseover', toggle)
            //});
            break
        case 'random':
            isRandom = true;
            func = random;
            //squares.forEach((square) => {
            //    square.addEventListener('mouseover', random)
            //});
            break
        case 'darkening':
            isDarkening = true;
            func = darkening;
            //squares.forEach((square) => {
            //    square.addEventListener('mouseover', darkening)
            //});
            break
    }
    squares.forEach((square) => {
        square.addEventListener('mouseover', func);
    });
}

function removeGridFunctionality() {
    const squares = document.querySelectorAll('.grid-square');
    let func;
    if (isToggle) {
        func = toggle;
    } else if (isRandom) {
        func = random;
    } else if (isDarkening) {
        func = darkening;
    }
    squares.forEach((square) => {
        square.removeEventListener('mouseover', func);
    })
    isToggle = isRandom = isDarkening = false;
}

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

    // Set squares highlight functionality
    setGridFunctionality();
}
createGrid();

// Clears and creates new grid of specified size
function updateGrid(size) {
    const container = document.querySelector('.container');
    container.textContent = "";
    createGrid(size);
}

// Obtain new and update grid square count
const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    let size = prompt('Enter new grid size: ');
    updateGrid(size);
});

// Add change event listener to radio buttons
const radios = document.querySelectorAll('input[name="update-modifier"]')
radios.forEach((radio) => {
    radio.addEventListener('change', (e) => {
        setGridFunctionality(e.target.value);
    });
});