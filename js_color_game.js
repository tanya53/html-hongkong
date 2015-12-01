var color_choices = ["cyan","gray","magenta","orange","red","white","yellow","blue","gold","green"];
var guess_color;
var finished = false;
var guesses = 0;
var target;

function color_game(){
	var random_number = Math.random() * 9;
	var random_number_integer = Math.floor(random_number);
	color_choices = color_choices.sort();
	target = color_choices[random_number_integer];
	
	while (!finished){
		guess_color = prompt("I am thinking of one of these colors \n\n" 
								   +color_choices.join()+ 
									"\n\n" + "What color am I thinking of?");
		guesses += 1;
		finished = check_guess();
	}

}

function check_guess(){
	if (color_choices.indexOf(guess_color)==-1){
		alert("Sorry, I don't recognize your color. \n\n" + 
		       "Pease try again.");
		return false;
	}

	if (guess_color > target){
		alert("Sorry, your guess is not correct!\n\n" +
			  "Hint: your color is alphabetically higher than mine\n\n"+
			  "Please try again.");
		return false;
	}
	if (guess_color < target){
		alert("Sorry, your guess is not correct!\n\n" +
			  "Hint: your color is alphabetically lower than mine\n\n"+
			  "Please try again.");
		return false;
	}
	myBody=document.getElementsByTagName("body")[0];
	myBody.style.background=target;
	alert ("Congratulations! You have guessed the color!\n\n"+
			"It took you " + guesses + " guesses to finish the game!\n\n" +
			"You can see the  color in the background.");
	return true;
	}