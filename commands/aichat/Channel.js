const { EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')
const db = global.db

module.exports = {
    data: new SlashCommandBuilder()
    .setName('aichannel')
    .setDescription('AI chat bots channel.')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand(subcommand =>
      subcommand
        .setName("enable")
        .setDescription("Enable AI chat bot channel.")
        .addChannelOption(option =>
          option.setName('channel')
            .setDescription('The channel.')
            .setRequired(true)),
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("disable")
        .setDescription("Disable AI chat bot channel.")
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("help")
        .setDescription("AI chat bot help page.")
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("info")
        .setDescription("Info about AI chat bot.")
    ),
    async execute (interaction) {

        if (interaction.options.getSubcommand() === "help") {
            const embed = new EmbedBuilder()
              .setTitle("AI chat bot help", interaction.user.displayAvatarURL())
              .setDescription(`
      
              <> = required | [] = optional  
      
              **__Commands__**
              \`/aichannel enable <#channel>\` - Enable AI chat bot.
              \`/aichannel disable\` - Disable AI chat bot.
              \`/aichannel help\` - Opens this menu.
              \`/aichannel info\` - Info about AI chat bot.
      
         `)
              .setColor("#00ff00")
              .setTimestamp()
            return interaction.reply({ embeds: [embed] })
      
          } else if (interaction.options.getSubcommand() === "disable") {

            await db.set(`aiChat_${interaction.guild.id}.isEnabled`, false)

            const embed = new EmbedBuilder()
            .setTitle("Success")
            .setDescription(`AI Chat Channel disabled.`)
            .setColor("#00ff00")
            .setTimestamp()

            return interaction.reply({ embeds: [embed], ephemeral: true });

          } else if (interaction.options.getSubcommand() === "enable") {

            const channel = interaction.options.getChannel('channel')
            await db.set(`aiChat_${interaction.guild.id}.isEnabled`, true)
            await db.set(`aiChat_${interaction.guild.id}.Channel`, channel.id)

            const embed = new EmbedBuilder()
            .setTitle("Success")
            .setDescription(`AI Chat Channel enabled. \n Channel: <#${channel.id}>`)
            .setColor("#00ff00")
            .setTimestamp()

            return interaction.reply({ embeds: [embed], ephemeral: true });

          } else if (interaction.options.getSubcommand() === "info") {
           
          }
      

    }
}