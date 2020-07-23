const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
let cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You've found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}
function flipCard(cardID) {
	console.log("user flipped " + cards[cardID].rank); 
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	cardsInPlay.push(cards[cardID].rank);
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