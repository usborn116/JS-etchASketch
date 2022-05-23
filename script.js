const container = document.querySelector('.container');

function makeGrid(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++ ){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-cell';
    };
};

makeGrid (16,16);

const button = document.querySelector('.gridsize');
button.addEventListener('click',function(){
    removeElementsByClass();
    let x = parseInt(prompt("How many squares on each side of the grid?"));
    if (x > 100){
        alert("Too large! Enter a number 100 or lower.")
    } 
    makeGrid(x,x);
    cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => cell.addEventListener('mouseover', function changecolor (){
            cell.classList.add('hovered');
        }));
    });

function removeElementsByClass(){
    document.querySelectorAll('.grid-cell').forEach(el => el.remove());
}


let cells = document.querySelectorAll('.grid-cell');
cells.forEach(cell => cell.addEventListener('mouseover', function changecolor (){
    cell.classList.add('hovered');
})
);