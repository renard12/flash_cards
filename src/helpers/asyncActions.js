const getNewShuffleUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
const getNewCardUrl = (id) => `https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`

const status = (response) => {  
    if (response.status >= 200 && response.status < 300) {  
      return Promise.resolve(response)  
    } else {  
      return Promise.reject(new Error(response.statusText))  
    }  
  }

export const getNewShuffle = () => {
   return fetch(getNewShuffleUrl)
    .then(status)
    .then(resp=> resp.json())
    .then(response => {
        const newCardUrl = getNewCardUrl(response.deck_id);
         return fetch(newCardUrl)
        .then(status)
        .then(card => card.json())
    })
    .then(result => result)
    .catch(err=>console.log(err))
}