module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '955225281742913586';
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
                + `${noGoodItemEmoji} All Other Votes`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(sianEmoji);
        messageEmbed.react(seriaEmoji);
        messageEmbed.react(kaysarrEmoji);
        messageEmbed.react(weiEmoji);
        messageEmbed.react(madnickEmoji);
        messageEmbed.react(legendaryRapportEmoji);
        messageEmbed.react(mokamokaEmoji);
        messageEmbed.react(noGoodItemEmoji);
        
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if(reaction.emoji.name === sianEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(sianRole);
                }
                if(reaction.emoji.name === seriaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(seriaRole);
                }
                if(reaction.emoji.name === kaysarrEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(kaysarrRole);
                }
                if(reaction.emoji.name === weiEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(weiRole);
                }
                if(reaction.emoji.name === madnickEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(madnickRole);
                }
                if(reaction.emoji.name === legendaryRapportEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(legendaryRapportRole);
                }
                if(reaction.emoji.name === mokamokaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mokamokaRole);
                }
                if(reaction.emoji.name === noGoodItemEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(noGoodItemRole);
                }
            } else {
                return;
            }
            
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if(reaction.emoji.name === sianEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(sianRole);
                }
                if(reaction.emoji.name === seriaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(seriaRole);
                }
                if(reaction.emoji.name === kaysarrEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(kaysarrRole);
                }
                if(reaction.emoji.name === weiEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(weiRole);
                }
                if(reaction.emoji.name === madnickEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(madnickRole);
                }
                if(reaction.emoji.name === legendaryRapportEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(legendaryRapportRole);
                }
                if(reaction.emoji.name === mokamokaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mokamokaRole);
                }
                if(reaction.emoji.name === noGoodItemEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(noGoodItemRole);
                }
            } else {
                return;
            }
        })
    }
}