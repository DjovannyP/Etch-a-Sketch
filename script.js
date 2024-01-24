const container = document.querySelector('.container');
const button = document.querySelector('button');

function createGrid(size) {
    container.innerHTML = '';
    for (let i = 0; i < size; i++){
    const column = document.createElement('div');
    column.classList.add('column');
    container.appendChild(column);
    for (let j = 0; j < size; j++){
       const row = document.createElement('div');
        row.classList.add('row');
        column.appendChild(row);

        row.addEventListener('mouseover', (e) => e.target.classList.add('black'))
    }
}
}
 let size;
button.addEventListener('click', askValueToCreateGrid)

function askValueToCreateGrid() {
   
    do {
        size = prompt("Your value can't be more than 100", '16');
    }
    while (size > 100)
    createGrid(size);
}





