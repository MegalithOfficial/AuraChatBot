const { SlashCommandBuilder } = require('discord.js')
const { askQuestion } = require('../../functions')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ask')
    .setDescription('Ask somethink to AI.')
    .addStringOption(option => option.setName("question").setDescription("Enter your question.").setRequired(true)),
   
    async execute (interaction) {
      
      const question = interaction.options.getString('question')
      const data = await askQuestion(question, interaction.user.username)
      return interaction.reply({ content: data })
    }
}