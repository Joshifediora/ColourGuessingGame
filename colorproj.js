alert("connected")
var squarecount = 6;
var colours = coloursarray(squarecount)

var squares = document.querySelectorAll(".square")

var selectedcolour = selectcolourfromarray();
var colourdisplay = document.querySelector("#colourdisplay");
var winortry = document.querySelector("#winortry")
var h1 = document.querySelector("h1");
var resetcolours = document.querySelector("#reset");
var easymode = document.querySelector("#easybut");
var hardmode = document.querySelector("#hardbut");


colourdisplay.textContent = selectedcolour;

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colours[i];
	squares[i].addEventListener("click", function(){
	var clicked = this.style.backgroundColor;
		if(clicked === selectedcolour){winortry.textContent = "Correct!"; changesquarecolours(clicked); h1.style.backgroundColor = clicked; 
										resetcolours.textContent = "Play Again?";}
			else{this.style.backgroundColor = "#232323";
					winortry.textContent = "Try Again!"
				}
	})
}

function changesquarecolours(color){
	for(var i = 0; i < squares.length; i++){squares[i].style.backgroundColor = color;};
}

function selectcolourfromarray(){ var randomarray = Math.floor(Math.random() * colours.length); return colours[randomarray]};

function coloursarray(pum){ 
	var colourarray = [];
	for(var i = 0; i < pum; i++){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var k = "rgb(" + r + ", " + g +", " + b + ")";
	colourarray.push(k);
}
return colourarray;
;}


resetcolours.addEventListener("click", function(){
	colours = coloursarray(squarecount);
	selectedcolour = selectcolourfromarray();
	colourdisplay.textContent = selectedcolour;
	for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colours[i];}
	h1.style.backgroundColor = "steelblue";
	winortry.textContent = "";
	resetcolours.textContent = "New Colours";

	});

easymode.addEventListener("click", function(){
	easymode.classList.add("selected");
	hardmode.classList.remove("selected");
	winortry.textContent = "";
	resetcolours.textContent = "New Colours";
	squarecount = 3;
	colours = coloursarray(squarecount);
	selectedcolour = selectcolourfromarray();
	colourdisplay.textContent = selectedcolour;
	for(var i = 0; i < squares.length; i++){
			if(colours[i]){squares[i].style.backgroundColor = colours[i];}
				else{squares[i].style.display = "none";}}
});


hardmode.addEventListener("click", function(){
	easymode.classList.remove("selected");
	hardmode.classList.add("selected");
	resetcolours.textContent = "New Colours";
	winortry.textContent = "";
	squarecount = 6;
	colours = coloursarray(squarecount);
	selectedcolour = selectcolourfromarray();
	colourdisplay.textContent = selectedcolour;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colours[i];
		squares[i].style.display = "block";};
});