 exports.info = {description: 'Голосование', required: 'BOT_OWNERS'}
exports.run = async (client, msg, args) => {

 var vote = args.join(" ");
var embed = new Discord.RichEmbed()
.setTitle("Голосование")
.setDescription(vote)
.setColor('RANDOM')
.setFooter('Poll');
msg.guild.channels.find('name', 'votes').send({embed})
await msg.react('${client.emojis.get(client.yes)}')
await msg.react(client.emojis.get(client.no))
}
