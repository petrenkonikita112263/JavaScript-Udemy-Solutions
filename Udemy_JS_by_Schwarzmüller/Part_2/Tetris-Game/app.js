document.addEventListener('DOMContentLoaded', () => {

    // define const and create the array
    const width = 10;
    const grid = document.querySelector('.grid');
    const finalScore = document.getElementById('score');
    const startButton = document.getElementById('start-button');
    let squareArray = Array.from(document.querySelectorAll('.grid div'));
    let nextRandom = 0;
    let timer;
    let score = 0;

    // console.log(squareArray);

    // create each shape (tetrominoes)
    const lShape = [
        // build shape like it lay out in paper sheet
        [1, width + 1, width * 2 + 1, 2],                        
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];

    const zShape = [
        [0, width, width + 1, width * 2 +1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 +1]
    ];

    const tShape = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ];

    const oShape = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ];

    const iShape = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ];

    const shapeArray = [lShape, zShape, tShape, oShape, iShape];

    // console.log(shapeArray);

    let currentPosition = 4;
    let currentRotPos = 0;

    // random chose
    let random = Math.floor(Math.random() * shapeArray.length);
    
    // console.log(random);

    let currentShape = shapeArray[random][currentRotPos];

    // console.log(currentShape)

    // draw the shape
    function draw() {
        currentShape.forEach(i => {
            squareArray[currentPosition + i].classList.add('shape')
        });
    };

    draw();

    // delete the drown shape
    function unDraw() {
        currentShape.forEach(i => {
            squareArray[currentPosition + i].classList.remove('shape')
        });
    };

    // move shape down
    // timer = setInterval(moveDown, 1000);


    // function to move down
    function moveDown() {
        unDraw();
        currentPosition += width;
        draw();
        freezeShape();
    };

    // freeze shape on the bottom
    function freezeShape() {
        if (currentShape.some(i => 
            squareArray[currentPosition + i + width].classList.contains('taken'))) {
                currentShape.forEach(i => squareArray[currentPosition + i].classList.add('taken'))
                // if true new shape will move down from up
                random = nextRandom;
                nextRandom = Math.floor(Math.random() * shapeArray.length);
                currentShape = shapeArray[random][currentRotPos];
                currentPosition = 4;
                draw();
                showShape();
                addScore();
                endGame();
        }
    };

    // set right and left edge
    function moveLeft() {
        unDraw();
        const isOnLeftEdge = currentShape.some(i =>
            ((currentPosition + i) % width === 0));
        if (!isOnLeftEdge) {
            currentPosition -= 1;
        }
        if (currentShape.some(i => squareArray[currentPosition + i].classList.contains('taken'))) {
            currentPosition += 1;
        };
        draw();
    };

    function moveRight() {
        unDraw();
        const isOnRightEdge = currentShape.some(i =>
            ((currentPosition + i) % width === width - 1));
        if (!isOnRightEdge) {
            currentPosition += 1;
        }
        if (currentShape.some(i => squareArray[currentPosition + i].classList.contains('taken'))) {
            currentPosition -= 1;
        };
        draw();
    };

    // rotate shape
    function rotate() {
        unDraw();
        currentRotPos++;
        // when it got to 4 made it back switch to 0
        if (currentRotPos === currentShape.length) {
            currentRotPos = 0;
        }
        currentShape = shapeArray[random][currentRotPos];
        draw(); 
    };

    // assign functions to keyCode
    function controle(k) {
        if (k.keyCode === 37) {
            moveLeft();
        } else if (k.keyCode === 38) {
            rotate();
        } else if (k.keyCode === 39) {
            moveRight();
        } else if (k.keyCode === 40) {
            moveDown();
        }
    };
    document.addEventListener('keyup', controle);

    // show up-next shape
    const displayShape = document.querySelectorAll('.mini-grid div');
    const displayWidth = 4;
    let displayIndex = 0;

    // shape can't rotate
    const nextShape = [
        // start shape of each item
        [1, displayWidth + 1, displayWidth * 2 + 1, 2],
        [0, displayWidth, displayWidth + 1, displayWidth * 2 +1],
        [1, displayWidth, displayWidth + 1, displayWidth + 2],
        [0, 1, displayWidth, displayWidth + 1],
        [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1]
    ];

    // display next shape
    function showShape() {
        displayShape.forEach(item => {
            item.classList.remove('shape')
        });
        nextShape[nextRandom].forEach(i => {
            displayShape[displayIndex + i].classList.add('shape')
        });
    };

    // button functionality
    startButton.addEventListener('click', () => {
        if (timer) {
            clearInterval(timer);
            timer = null;
        } else {
            draw();
            timer = setInterval(moveDown, 1000);
            nextRandom = Math.floor(Math.random() * shapeArray.length);
            showShape();            
        }
    });

    // count score
    function addScore() {
        for (let i = 0; i < 250; i += width) {
            const row = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6,
            i + 7, i + 8, i + 9];
            if (row.every(i => 
                squareArray[i].classList.contains('taken'))) {
                    score += 10;
                    finalScore.innerHTML = score;
                    row.forEach(i => {
                        squareArray[i].classList.remove('taken')
                        squareArray[i].classList.remove('shape');
                    });
                    const removeSquare = squareArray.splice(i, width);
                    // console.log(removeSquare);
                    squareArray = removeSquare.concat(squareArray);
                    squareArray.forEach(cell =>
                        grid.appendChild)
                }
        }
    };

    // game over
    function endGame() {
        if (currentShape.some(i =>
            squareArray[currentPosition + i].classList.contains('taken'))) {
                finalScore.innerHTML = 'end';
                clearInterval(timer);
            }
    };    

})