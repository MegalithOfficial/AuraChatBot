const { Client } = require('discord.js')
const { bot } = require('./config.js')
const client = new Client({ intents: bot.intents, scopes: bot.scopes })

const { JsonDatabase } = require('wio.db')
const db = global.db = new JsonDatabase({
    databasePath:"./database.json"
  });

require("./handlers/command-loader.js")
require("./handlers/event-handler.js")(client)
require("./handlers/command-handler.js")(client)

process.on('uncaughtException', err => console.log(err))
client.login(bot.token)