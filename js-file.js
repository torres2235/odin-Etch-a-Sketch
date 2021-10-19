document.body.onload = addElement;

//adds our divs into our grid
function addElement() {
    for(i=0; i < 256; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "square";

        //newDiv.innerText = ".";

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