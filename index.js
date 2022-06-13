
const cards = [];

function writeCards(cards, event) {
    let newCards = [];
    for (let i = 0; i < cards.length; i++) {
         newCards.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)

    }
    return newCards;

}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number) {
    while (number >= 0) {
        console.log(number--)
    }
}