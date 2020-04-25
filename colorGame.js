let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("messageDisplay");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");

let modeButtons = document.querySelectorAll(".mode");
colorDisplay.textContent = pickedColor;

init();

function init(){
    setupModeBtns();
    setupSquares();
    reset();
}

function setupModeBtns(){
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            for(let j = 0; j < modeButtons.length; j++){
                modeButtons[j].classList.remove("selected");
                modeButtons[j].classList.remove("selected");    
            }
            this.classList.add("selected");    
            this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    
        squares[i].addEventListener("click", function () {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                changeColors(clickedColor);
                messageDisplay.innerHTML = '<i class="far fa-circle"></i> Correct!';
                messageDisplay.style.color = "green";
                h1.style.backgroundColor = clickedColor;
                resetButton.innerHTML = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.innerHTML = '<i class="far fa-times-circle"></i> Play Again!';
                messageDisplay.style.color = "red";
            }
        });
    }
}



function reset() {
    resetButton.innerHTML = "New Colors";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = '';

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "rgb(70, 130, 180)";
    console.log(colors);
}


resetButton.addEventListener("click", function () {
    reset();
    console.log(colors);
});




function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}