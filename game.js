let gamePattern = [];
//buttons colors
let buttonColours = ["red", "blue", "green", "yellow"]

// Next Sequence function
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}
let randomChosenColour = buttonColours[nextSequence()];
//add random color chosen to game pattern
gamePattern.push(randomChosenColour);

//alert(gamePattern);
