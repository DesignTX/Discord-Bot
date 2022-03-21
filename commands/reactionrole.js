module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '955232461133062167';
        const noGoodItemRole = message.guild.roles.cache.find(role => role.name === "No Good Items");
        const seriaRole = message.guild.roles.cache.find(role => role.name === "Seria");
        const legendaryRapportRole = message.guild.roles.cache.find(role => role.name === "Legendary Rapport");
        const sianRole = message.guild.roles.cache.find(role => role.name === "Sian");
        const madnickRole = message.guild.roles.cache.find(role => role.name === "Madnick");
        const mokamokaRole = message.guild.roles.cache.find(role => role.name === "Mokamoka");
        const weiRole = message.guild.roles.cache.find(role => role.name === "Wei");
        const kaysarrRole = message.guild.roles.cache.find(role => role.name === "Kaysarr");

        const noGoodItemEmoji = '❓';
        const seriaEmoji = '🟦';
        const legendaryRapportEmoji = '♥️';
        const sianEmoji = '🟧';
        const madnickEmoji = '🟪';
        const mokamokaEmoji = '🟩';
        const weiEmoji = '🟨';
        const kaysarrEmoji = '🟥';

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('ITEM ROLES')
        .setDescription('Choose roles based on what items you would like to get pinged for!\n\n'
            + `${sianEmoji} Sian Card\n`
            + `${seriaEmoji} Seria Card\n`
            + `${kaysarrEmoji} Kaysarr Card\n`
            + `${weiEmoji} Wei Card\n`
            + `${madnickEmoji} Madnick Card\n`
            + `${legendaryRapportEmoji} Legendary Rapport\n`
            + `${mokamokaEmoji} Mokamoka Card\n`
            + `${noGoodItemEmoji} All Other Votes\n`
        );
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(sianEmoji);
        messageEmbed.react(seriaEmoji);
        messageEmbed.react(kaysarrEmoji);
        messageEmbed.react(weiEmoji);
        messageEmbed.react(madnickEmoji);
        messageEmbed.react(legendaryRapportEmoji);
        messageEmbed.react(mokamokaEmoji);
        messageEmbed.react(noGoodItemEmoji);
    }
}