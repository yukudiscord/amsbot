 exports.info = {description: 'Голосование', required: 'BOT_OWNERS'}
exports.run = async (client, msg, args) => {
var vote = args.join(" ");
var embed = new Discord.RichEmbed()
.setTitle("Голосование")
.setDescription(vote)
.setColor('RANDOM')
.setFooter('AMS');
client.fetchwebhook('471794934354018306, 'process.env.WEBHOOK_ID').then(webhook -> {
      webhook.send('', {username: nick, avatarURL: msg.author.avatarURL, embeds:  [embed]}).catch(console.error);
await msg.react(client.emojis.get(client.yes))
await msg.react(client.emojis.get(client.no))
 }
}
