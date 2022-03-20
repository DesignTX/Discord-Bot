const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });


client.once('ready', () => {
    console.log('DesignBot Online!')
})



client.login('')