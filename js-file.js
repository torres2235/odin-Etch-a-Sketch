document.body.onload = addElement;

function addElement() {

    for(i=0; i < 256; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "square";

        //newDiv.innerText = ".";

        document.getElementById('container').appendChild(newDiv);
    }
}

let square = document.getElementById('container');
square.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = "black";
});