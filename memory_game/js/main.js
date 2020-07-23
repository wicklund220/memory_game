let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You've found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}
function flipCard(cardID) {
	console.log("user flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	if (cardsInPlay === 2) {
	 if (cardsInPlay[0] === cardsInPlay[1]) {
	 	alert("you found a match");
	 } else {
	 	alert("sorry, try again");
	 }
	}	
	checkForMatch(); 
}
flipCard(0); 
flipCard(2); 