exports.info = {description: 'Голосование', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {
  var embed = new client.RichEmbed()
    .setTitle("Голосование")
    .setDescription(args.join(" "))
    .setColor('RANDOM')
    .setFooter('AMS');
  client.fetchWebhook(471967122369806347, process.env.WEBHOOK_TOKEN).then(webhook => {
    webhook.send({username: nick, avatarURL: msg.author.avatarURL, embeds:  [embed]}).catch(console.error);
  }).catch(console.error);
  await msg.react(`${client.emojis.get(client.yes)}`)
  await msg.react(`${client.emojis.get(client.no)}`)
  msg.channel.send('**Голосование участника ${msg.author} отправлено**')
}
