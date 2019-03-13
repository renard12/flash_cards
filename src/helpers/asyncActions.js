const getNewShuffleUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';


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
    .then(id => console.log(id.deck_id))
    .catch(err=>console.log(err))
}