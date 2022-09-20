const axios = require('axios').default;
const { api } = require('./config')

 // http://api.brainshop.ai/get?bid=157721&key=MOgh12wK2YrqbsiK&uid=[uid]&msg=[msg]

async function askQuestion(question, username) {

    const apiKey = api.key;
    const apiBrainId = api.BrainId;
    const url = "http://api.brainshop.ai/" + "get?bid=" + apiBrainId + "&key=" + apiKey + "&uid=" + username + "&msg=" + question || api.options.url + "get?bid=" + apiBrainId + "&key=" + apiKey + "&uid=" + username + "&msg=" + question

 try {
   const data = await axios.get(url)
   return data.data.cnt;
 } catch (err) {
  console.error(err)
 }
}

module.exports = {
    askQuestion
}