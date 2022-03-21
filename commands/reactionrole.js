module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    execute(message, args, Discord, client) {
        const channel = '955225281742913586'
        const noGoodItem = message.guild.roles.cache.find(role => role.name === "No Good Items");
        const seria = message.guild.roles.cache.find(role => role.name === "Seria");
        const legendaryRapport = message.guild.roles.cache.find(role => role.name === "Legendary Rapport");
        const sian = message.guild.roles.cache.find(role => role.name === "Sian");
        const madnick = message.guild.roles.cache.find(role => role.name === "Madnick");
        const mokamoka = message.guild.roles.cache.find(role => role.name === "Mokamoka");
        const wei = message.guild.roles.cache.find(role => role.name === "Wei");
        const kaysarr = message.guild.roles.cache.find(role => role.name === "Kaysarr");
    }
}