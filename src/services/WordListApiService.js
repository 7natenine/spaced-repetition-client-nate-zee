import config from '../config'


const WordListApiService = {
  getWords() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
      },
    })

      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

}

export default WordListApiService