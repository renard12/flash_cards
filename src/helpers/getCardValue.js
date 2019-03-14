const getCardValue = (card) =>{
    const cardNumber = parseInt(card.value, 10)
    if (!Number.isNaN(cardNumber))
        return cardNumber
    else {
        switch(card.value){
            case 'JACK': return 11;
            case 'QUEEN': return 12;
            case 'KING': return 13;
            case 'ACE': return 14;
            default: return 0;
        }
    }
}

export const whoWin = (cards, beat) => {
    const firstCard = getCardValue(cards[0]);
    const secondCard = getCardValue(cards[1]);
    if( firstCard > secondCard && beat === 'Up' || firstCard < secondCard && beat === 'Down') {
        return 'You win'
    } else {
        return 'You loose'
    }
}