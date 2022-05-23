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

const cells = Array.from(document.querySelectorAll('.grid-cell'));
cells.forEach(cell => cell.addEventListener('mouseover', function changecolor (){
    cell.classList.add('hovered');
})
);;