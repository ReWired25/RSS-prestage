// *************** selectors, variables *************** //

let cells = document.querySelectorAll('.cell');
let scoreX = document.querySelector('.score-x');
let score0 = document.querySelector('.score-0');
let scoreDraw = document.querySelector('.score-draw');

let count = 0;
let winX = 0;
let win0 = 0;
let drawCount = 0;

// *************** local get function *************** //

window.addEventListener('load', () => {
    let localX = localStorage.getItem('winX');
    let local0 = localStorage.getItem('win0');
    let localDraw = localStorage.getItem('drawCount');

    if (localX) {
        scoreX.innerHTML = `Счёт крестов: ${localX}`;
        winX = +localX;
    }

    if (local0) {
        score0.innerHTML = `Счёт нулей: ${local0}`;
        win0 = +local0;
    }

    if (localDraw) {
        scoreDraw.innerHTML = `Ничья: ${localDraw}`;
        drawCount = +localDraw;
    }
})

// *************** clear field function *************** //

function clearField() {
    cells.forEach(item => {
        item.innerHTML = '';
    })
}

// *************** equal array function *************** //

function equalArr(arr1, arr2) {
    let finalArg = arr1.map(item => {
        if (!arr2.includes(item)) {
            return false;
        }
        return true;
    })

    return finalArg.includes(false) ? false : true;
}

// *************** winning combinations *************** //

let fullArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// *************** general function of game *************** //

field.addEventListener('click', () => {
    if (event.target.innerHTML === '') {
        if (count % 2 === 0) {
            event.target.innerHTML = 'X';
            count++;
        } else {
            event.target.innerHTML = '0';
            count++;
        }
    }

// *************** logic for X *************** //

    let arrX = [];
    
    cells.forEach((item, index) => {
        if (item.innerHTML === 'X') {
            arrX.push(index);
        };
    })

    for (let key of fullArr) {
        if (equalArr(key, arrX)) {
            console.log('///// Победили X /////')
            clearField();
            count = 0;
            winX++;
            console.log(`Счёт иксов: ${winX}`);
            localStorage.setItem('winX', winX);
            scoreX.innerHTML = `Счёт крестов: ${winX}`
        }
    }

// *************** logic for 0 *************** //

    let arr0 = [];

    cells.forEach((item, index) => {
        if (item.innerHTML === '0') {
            arr0.push(index);
        };
    })

    for (let key of fullArr) {
        if (equalArr(key, arr0)) {
            console.log('///// Победили 0 /////')
            clearField();
            count = 0;
            win0++;
            console.log(`Счёт нулей: ${win0}`);
            localStorage.setItem('win0', win0);
            score0.innerHTML = `Счёт нулей: ${win0}`
        }
    }

// *************** logic for draw *************** //

    function draw() {
        for (let key of cells) {
            if (key.innerHTML === '') {
                return false;
            }
        }

        return true;
    }

    if (draw()) {
        console.log('///// Ничья! /////');
        drawCount++;
        localStorage.setItem('drawCount', drawCount);
        scoreDraw.innerHTML = `Ничья: ${drawCount}`;
        for (let key of cells) {
            key.innerHTML = '';
        }
    }

    console.log('// отсечка');
})

//

for (let keys of fullArr) {
    console.log(keys);          // здесь мы обращаемся к каждому подмассиву
}

console.log(cells);