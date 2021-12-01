const row = 10;
const col = 10;
const numberSquare = row * col;
const containerGrid = document.getElementById('grid');

for (let i = 0; i < numberSquare; i++) {

    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${col})`
    square.style.height = `calc(100% / ${row})`
    square.append([i + 1])
    containerGrid.append(square);
    
}
