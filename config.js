const { OAuth2Scopes, IntentsBitField } = require('discord.js')
module.exports = {
    bot: {
        token: "", // Bot Token
        appId: "", // Application id
        guildId: "", // Guild id
        HandlerMode: "Global", // Global or Guild
        /*
        TR:
         Eğer botun slash commandları tüm sunucuda çalışsın istiyorsan HandlerMode "Global" yap.
         Eğer botun slash commandları sadece belli bir sunucuda istiyorsan HandlerMode "Guild" yap ve guildId'ye sunucunun idsini girin.
 
        EN:
         If you want bot's slash command works at all guilds, set HandlerMode to "Global".
         If you want bot's slash command only works at specific guild, set HandlerMode to "Guild" and set guildId to your guild id.
        */
        intents: [
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildMembers,
            IntentsBitField.Flags.GuildVoiceStates,
            IntentsBitField.Flags.GuildPresences,
            IntentsBitField.Flags.GuildMessages,
            IntentsBitField.Flags.DirectMessages,
            IntentsBitField.Flags.MessageContent
        ],
        scopes: [
            OAuth2Scopes.Bot,
            OAuth2Scopes.ApplicationsCommands,
        ],
    },

    api: {
        key: "", // API Anahtarını girin. / Enter API key.
        BrainId: "", // BrainId girin. / Enter BrainId.
        options: {}, // eğer bunun ne olduğunu bilmiyorsan, sadece elleme / if you dont know what is this, just dont touch it.
        /*
         TR:
          Örnek Options: 
           key: 'ÖrnekAnahtar'
           BrainId: "123456", 
           options: {
            url: 'API URL'
           },
           Örnek URL: 'http://api.brainshop.ai/'

         EN:
          Example Options: 
           key: 'ExampleKey'
           BrainId: "123456", 
           options: {
            url: 'API URL'
           },
           Example URL: 'http://api.brainshop.ai/'
        */
    },

}