var nav_button = document.getElementById("nav-button");
var nav_button_state = false;
nav_button.addEventListener("click", function(){
	if (nav_button_state == false) {
		document.getElementsByClassName("selection-menu")[0].setAttribute("id", "");
		nav_button_state = true;
	} else if (nav_button_state == true) {
		document.getElementsByClassName("selection-menu")[0].setAttribute("id", "menu-dropdown-false");
		nav_button_state = false;
	} else {
		console.log("DEBUG: Error");
	}
	
});

var chess_memes = document.getElementById("chess-memes-hidden");
var chess_memes_state = false;
function showhidden(){
	if (chess_memes_state == false) {
		chess_memes.removeAttribute("style");
		chess_memes_state = true;
	} else {
		chess_memes.setAttribute("style", "display: none;");
		chess_memes_state = false;
	}
}