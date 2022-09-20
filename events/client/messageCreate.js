const db = global.db;
const { askQuestion } = require('../../functions')

module.exports = {
    name: 'messageCreate',
    async execute (message) {
        if(message.author.bot || !message.guild) return
        if(await db.get(`aiChat_${message.guild.id}.isEnabled`) === true) {
          const question = await askQuestion(message.content, message.author.username)
          message.reply({ content: question })
        }
    }
  }
  