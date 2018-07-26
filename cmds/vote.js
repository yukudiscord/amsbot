exports.info = {description: 'Голосование', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {
 
var embed = new Discord.RichEmbed()
.setTitle("Голосование")
.setDescription(args.join(" "))
.setColor('RANDOM')
.setFooter('AMS');
client.fetchwebhook('471794934354018306, 'process.env.WEBHOOK_ID').then(webhook -> {
      webhook.send('', {username: nick, avatarURL: msg.author.avatarURL, embeds:  [embed]}).catch(console.error);
 }).catch(console.error);
await msg.react('${client.emojis.get(client.yes)}')
await msg.react('${client.emojis.get(client.no)}')
 msg.channel.send('**Голосование участника ${msg.author} отправлено**')
}
