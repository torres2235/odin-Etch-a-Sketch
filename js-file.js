document.body.onload = addElement(16);

//adds our divs into our grid
function addElement(x = 16) {

    let totalSquares = x * x;

    let totalPixels = 160000;

    let box = Math.sqrt(totalPixels / totalSquares); //gives us what we should set our length and width of each box

    for(i=0; i < totalSquares; i++) {
        let newDiv = document.createElement('div');
        newDiv.style.width = box + "px";
        newDiv.style.height = box + "px";
        newDiv.className = "square";

        document.getElementById('container').appendChild(newDiv);
    }
}

//changes background color of the squares in our div
let currentColor = "";
let buttonSelect = 0;
let square = document.getElementById('container');
square.addEventListener("mouseover", function(e) {
    if(buttonSelect == 0) { //change to black
        e.target.style.backgroundColor = "black";
    } else if (buttonSelect == 1) { //pick random color
        e.target.style.backgroundColor = getColor();
    }
    
});

//this function clears the canvas back to white
let clearButton = document.getElementById('clearButton');
clearButton.addEventListener("click", function(e){
    //creates an array of each div in the container
    let children = document.getElementById("container").getElementsByTagName("*");

    //cycles through each div
    for( var i = 0; i<children.length; i++){ 
        children[i].style.backgroundColor = "white";
    }
});

//these two functions toggle if the the grids change to black or a random color
let blackButton = document.getElementById('blackButton');
blackButton.addEventListener("click", function(e){
    return buttonSelect = 0;
});

let colorButton = document.getElementById('colorButton');
colorButton.addEventListener("click", function(e){
    return buttonSelect = 1;
});
//------------------------------------------------------------------------------

//these two fucntions generate a random RGB value ("rgb(#, #, #)")
function getRandomColor() { //To give me a new rgb number everytime
    return (Math.floor(Math.random() * (255 - 10)) + 10);
}
function getColor() {
  return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
}
//-----------------------------------------------------------------

//resizes our grid
let form = document.getElementById('form');

form.addEventListener("submit", function(e){

    e.preventDefault(); //prevents autosubmiting

    //creates an array of each div in the container
    let children = document.getElementById("container").getElementsByTagName("*");

    //cycles through each div
    for( var i = 0; i<children.length;){ 
        children[i].remove();
    }

    let resize = document.getElementById('resize').value

    if(resize <= 64) {
        addElement(resize);
    } else {
        alert("Invalid size");
        addElement(16);
    }
    
});