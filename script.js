const container = document.querySelector('.container');

function createGrid(size) {

    for (let i = 0; i < size; i++){
    const column = document.createElement('div');
    column.classList.add('column');
    container.appendChild(column);
    for (let j = 0; j < size; j++){
        const row = document.createElement('div');
        row.classList.add('row');
        column.appendChild(row);
    }
}
}

createGrid(32);