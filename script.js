const container = document.querySelector('.container');
const button = document.querySelector('.gridsize');

function selectcells () {
    cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => cell.addEventListener('mouseover', function changecolor (){
        cell.style.cssText = `background-color:${randomcolor()};opacity:0.5`
    }))
};

function makeGrid(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++ ){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-cell';
    };
    selectcells();
};

function ask(){
    let x = parseInt(prompt("How many squares on each side of the grid?"));
    if (x > 100){
        alert("Too large! Enter a number 100 or lower.");
        ask();
    } else {
        makeGrid(x,x);
};
};

button.addEventListener('click',function(){
    removeElementsByClass();
    ask();
});

function removeElementsByClass(){
    document.querySelectorAll('.grid-cell').forEach(el => el.remove());
}

function randomcolor () {
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    return `rgb(${x},${y},${z})`
}


makeGrid (16,16);