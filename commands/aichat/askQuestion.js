const { EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ask')
    .setDescription('Ask somethink to AI.'),
   
    async execute (interaction) {
        
    }
}
