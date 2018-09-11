
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var correct = document.getElementById("correct");
var h1 = document.querySelector("h1");
var button = document.querySelector("#button");
var buttons = document.querySelectorAll("button");
var grayscale = document.querySelector("#grayscale");
var buttonText = document.querySelector("#button");
var radios = document.querySelectorAll("input");
var span = document.querySelectorAll(".containspan")
var form = document.querySelectorAll("form");
var arr = [];


function randomFunction(){
	var random = Math.floor(Math.random()*256);
	return random;
}

firstRun();
radios[0].checked = true;

function generateRandomColor(){
	randomFunction();
	var color = "rgb(" + randomFunction() + ", " + randomFunction() + ", " + randomFunction() + ")";
	return color;
}


function colorArray(){
	var arr = [];
	for (var i = 0; i < 6; i++) {
		arr.push(generateRandomColor());
	}
	return arr;
}


function colorPicker(){
	var numSquare = Math.floor(Math.random()*6);
	return numSquare;
}


function refresh(){
	colors = colorArray();
	h1.style.backgroundColor = "#1F5F96";
	correct.textContent = ""
	buttonText.textContent = "New Colours"
	pickedColor = functionPickColor();
	constant();
}


function functionPickColor(){
	var pickedColor = colors[colorPicker()];
	return pickedColor;
}

function firstRun(){
	colors = colorArray();
	colorPicker();
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
				buttonText.textContent = "Play Again"
				console.log(pickedColor);
				for (var i = 0; i < squares.length; i++ ){
					squares[i].style.backgroundColor = pickedColor;
					h1.style.backgroundColor = pickedColor;
				}			
			}
			else {
				this.style.backgroundColor = "transparent";
				correct.textContent = "Try Again!"
			}
		});
	}
}


button.addEventListener("click", function(){
		//if second radio button is checked, run this code
		if(radios[1].checked){
			//Run grayscale colors and logic
			grayScaleFunction();
		} else {
			//if first radio button is checked, run this code
			refresh();
		}
});





//=====================================
//             GRAYSCALE
//=====================================


function colorArrayGray(){
	//Use random on r, g and b.
	var arr = [];
	for (var i = 0; i < 6; i++) {
		var random = Math.floor(Math.random()*256);
		var color = "rgb(" + random + ", " + random + ", " + random + ")";
		arr.push(color);
		// console.log(arr[i]);
		}
		return arr;
	}

//Press the grayscale button
	//Listen for "grayscale" button press
// grayscale.addEventListener("click", function(){
	//generate new colors in gray scale.
	
	
	//run other codes.
	function grayScaleFunction(){

		// var span = document.querySelectorAll(".span")

		colors = colorArrayGray();

		h1.style.backgroundColor = "#232323";
		correct.textContent = "";
		buttonText.textContent = "New Colours";

		for (var i = 0; i < form.length; i++){
			// form[i].style.color = "black";
			form[i].classList.add("form_gray");
		};


		for (var i = 0; i < span.length; i++){
			span[i].classList.add("containspan_gray");
		};

		for (var i = 0; i < buttons.length; i++){
			buttons[i].classList.add("button_gray");
		};

		//pickedColorFunction
		pickedColor = functionPickColor();

		//constant
		constant();
	}
// grayScaleFunction();

// });


for (var i = 0; i < radios.length; i++) {
	radios[i].addEventListener("click", function(){
// if(document.getElementById("grayscale_radio").checked){
	
		//Grayscale Radio button is selected
		// if second radio button is checked, run this code
		if(radios[1].checked){
			//Run grayscale colors and logic
			grayScaleFunction();
		} else {
			//if first radio button is checked, run this code
				for (var i = 0; i < span.length; i++){
					span[i].classList.remove("containspan_gray");
				};

				for (var i = 0; i < buttons.length; i++){
					buttons[i].classList.remove("button_gray");
				};

				for (var i = 0; i < form.length; i++){
					form[i].classList.remove("form_gray");
				};
			refresh();
		}
	});
}