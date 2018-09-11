// alert ("CONNECTED");

// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]


var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var correct = document.getElementById("correct");
var h1 = document.querySelector("h1");
var arr = [];

firstRun();

function generateRandomColor(){
	var random = Math.floor(Math.random()*256);
	var color = "rgb(" + random + ", " + random + ", " + random + ")";
	return color;
}

function colorArray(){
	var arr = [];
	for (var i = 0; i < 6; i++) {
		arr.push(generateRandomColor());
		// console.log(arr[i]);
	}
	return arr;
}
// var colors = [];

function colorPicker(){
	// body...
	var numSquare = Math.floor(Math.random()*6);
	return numSquare;
}


function refresh(){
	colors = colorArray();
	// colorPicker();
	// console.log(newColors);
	// newColors = colorArray();
	h1.style.backgroundColor = "#232323";
	correct.textContent = ""
	// colors = newColors;
	// console.log(clickedColor);
	// console.log(pickedColor);
	pickedColor = functionPickColor();
	constant();
}

// var colors = refresh();
function functionPickColor(){
	var pickedColor = colors[colorPicker()];
	return pickedColor;
}

function firstRun(){
	colors = colorArray();
	colorPicker();
		// var pickedColor = "";
	pickedColor = functionPickColor();
	constant();
}


function constant(){
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++) {
		//adds initial colours to squares
		squares[i].style.backgroundColor = colors[i];


		squares[i].addEventListener("click", function(){
			//alert("clicked a square");
			var clickedColor = this.style.backgroundColor;

			if (clickedColor === pickedColor){
				// alert("Correct!");
				correct.textContent = "Correct!";
				// console.log(this.style.backgroundColor);
				console.log(pickedColor);
				for (var i = 0; i < squares.length; i++ ){
					squares[i].style.backgroundColor = pickedColor;
					h1.style.backgroundColor = pickedColor;
				}			
			}
			else {
				this.style.backgroundColor = "transparent";//"#232323";
				correct.textContent = "Try Again!"
				// console.log(pickedColor);
			}
		});
	}
}


// firstRun();