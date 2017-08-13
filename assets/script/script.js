var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var title = document.querySelector(".title");
var rgbDisplay = document.querySelector("#rgbDisplay");
var resetButton = document.querySelector("#reset");
var message = document.querySelector("#message");
var modeButton = document.querySelectorAll(".mode");

rgbDisplay.textContent = pickedColor;
rgbDisplay.style.textTransform = "uppercase";

for (i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function () {
        modeButton[0].classList.remove("selected");
        modeButton[1].classList.remove("selected");
        this.classList.add("selected");

        if (this.textContent === "EASY") {
            numSquares = 3;
            for (var i = 3; i < squares.length; i++){
                squares[i].style.display = "none";
            }
        }
        else if (this.textContent === "HARD"){
            numSquares = 6;

            for (var i = 3; i < squares.length; i++){
                squares[i].style.display = "block";
            }            
        }
        reset();
    });
}

function reset(){
    colors = generateRandomColors(numSquares);    
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    resetButton.textContent = "NEW COLORS";
    message.textContent = "";

    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        title.style.backgroundColor = "steelblue";
    }
}

for (var i = 0; i < squares.length; i++){  
    //add initial colors to the squares  
    squares[i].style.backgroundColor = colors[i];

    // add eventListners
    squares[i].addEventListener("click", function(){
        // grab the color of the clicked square
        var clickedColor = this.style.backgroundColor;
        // compare it with the pickedColor 
        if (clickedColor === pickedColor){
            message.textContent = "Correct!";
            changeColor(pickedColor);
            resetButton.textContent = "Play again?";
        }
        else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!";
        }
    });
}

resetButton.addEventListener("click", function(){
    reset();    
});

function changeColor(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
        title.style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
 }

 function generateRandomColors(num){
    //  create an array
    var arr = [];
    
    // add num number of elements to the array randomly
    for (var i = 0; i < num; i++){
        arr.push(randomColors());
    }
    // return array
    return arr;
 }

 function randomColors(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return ("rgb(" + r +", " + g +", " + b + ")");
 }




 // easyButton.addEventListener("click",function(){
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     rgbDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         title.style.backgroundColor = "steelblue";
//     }
//     for (var i = 3; i < squares.length; i++){
//         squares[i].style.display = "none";
//     }
// });

// hardButton.addEventListener("click",function(){
//     hardButton.classList.add("selected");
//     easyButton.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     rgbDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         title.style.backgroundColor = "steelblue";
//         squares[i].style.display = "block";        
//     }
// });