document.body.onload = addElement;

function addElement() {

    for(i=0; i < 256; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "square";

        //newDiv.innerText = ".";

        document.getElementById('container').appendChild(newDiv);
    }
}