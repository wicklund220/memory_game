let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let card1 = cards[0];
cardsInPlay.push(cards[0]);
console.log("user flipped queen");
let card2 = cards[2];
cardsInPlay.push(cards[2]);
console.log("user flipped king");
if cardsInPlay.length === 2 {
 if cardsInPlay[0] === cardsInPlay[2] {
 	alert("you found a match");
 } else {
 	alert("sorry, try again");
 }
} else {
	alert("choose another card");
}