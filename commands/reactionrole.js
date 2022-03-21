module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    execute(message, args, Discord, client) {
        const channel = '955225281742913586'
        const noGoodItemRole = message.guild.roles.cache.find(role => role.name === "No Good Items");
        const seriaRole = message.guild.roles.cache.find(role => role.name === "Seria");
        const legendaryRapportRole = message.guild.roles.cache.find(role => role.name === "Legendary Rapport");
        const sianRole = message.guild.roles.cache.find(role => role.name === "Sian");
        const madnickRole = message.guild.roles.cache.find(role => role.name === "Madnick");
        const mokamokaRole = message.guild.roles.cache.find(role => role.name === "Mokamoka");
        const weiRole = message.guild.roles.cache.find(role => role.name === "Wei");
        const kaysarrRole = message.guild.roles.cache.find(role => role.name === "Kaysarr");

        
    }
}