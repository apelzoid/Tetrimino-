const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20,20);

context.fillStyle = '#000';
context.fillRect(0,0,canvas.width, canvas.height);

const matrix = [ //individual blocks
        [0,0,0],
        [1,1,1],
        [0,1,0],
];

function draw() { //draws black background
    context.fillStyle = '#555';
    context.fillRect(0,0,canvas.width, canvas.height);
    drawMatrix(player.matrix, player.pos);
} 

function drawMatrix(matrix, offset) {  // draws blocks
    matrix.forEach((row,y) => {
        row.forEach((value,x) => {
            if (value !== 0) {
                context.fillStyle = 'red';
                context.fillRect(x + offset.x,
                                 y+ offset.y,
                                 1,1);
            }
        });
    });
}

function merge(arena,player) {
    
}

function createMatrix (w, h) {
    const matrix = [];
    while (h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function playerDrop () {
    player.pos.y ++;
    dropCounter = 0;
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {  //updates the screen at interval
    const deltaTime = time - lastTime;
    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        playerDrop();
    }

    lastTime = time;
    draw();
    requestAnimationFrame(update);
}

const arena =createMatrix(10,40);
console.log(arena); console.table(arena);


const player = {
    pos: {x:5, y:5},
    matrix: matrix,
}

document.addEventListener('keydown',event => {
    console.log(event);
    if (event.key === 'ArrowLeft') {
        player.pos.x --;
    } else if  (event.key === 'ArrowRight') {
        player.pos.x ++;
    } else if  (event.key === 'ArrowDown') {
        playerDrop();
    }

})


update();