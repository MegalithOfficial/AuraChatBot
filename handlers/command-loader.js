const fs = require('fs')
const path = require('path')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v10')
const { bot } = require('../config.js')

const commands = []
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

const getFilesRecursively = (directory) => {
  const filesInDirectory = fs.readdirSync(directory)
  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file)
    if (fs.statSync(absolute).isDirectory()) {
      getFilesRecursively(absolute)
    } else {
      commandFiles.push(absolute)
    }
  }
}
getFilesRecursively('./commands/')

for (const file of commandFiles) {
  const command = require(`../${file}`)
  commands.push(command.data.toJSON())
}

const rest = new REST({ version: '10' }).setToken(bot.token);

(async () => {
  try {
    if(bot.HandlerMode.toLocaleUpperCase() === "GUILD" || bot.HandlerMode.toLowerCase() === "guild" || bot.HandlerMode === "Guild") {

    await rest.put(
      Routes.applicationGuildCommands(bot.appId, bot.guildId),
      { body: commands }
    )
    } else if(bot.HandlerMode.toLocaleUpperCase() === "GLOBAL" || bot.HandlerMode.toLowerCase() === "global" || bot.HandlerMode === "Global") {

      await rest.put(
        Routes.applicationCommands(bot.appId),
        { body: commands }
      )

    } else {
      console.log("[Command-Loader] Invalid Handler Mode.")
      process.exit(0)
    }

    console.log('[Command-Loader] Slash Commands Loaded!')
  } catch (error) {
    console.error(error)
  }
})()


