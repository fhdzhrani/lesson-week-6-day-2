// click gray oval
 document.getElementById("grayButton").onclick = switchGray;

// click white oval
 document.getElementById("whiteButton").onclick = switchWhite;

// function to change color to gray
function switchGray() {
 document.getElementsByTagName("body")[0].style.backgroundColor = "gray";
 document.getElementsByTagName("body")[0].style.color = "white";
}

// function to change color to white
 function switchWhite() {
 document.getElementsByTagName("body")[0].style.backgroundColor = "white";
 document.getElementsByTagName("body")[0].style.color = "black";
}
