exports.info = {description: 'Голосование', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {
  var embed = new client.RichEmbed()
    .setTitle("Голосование")
    .setDescription(args.join(" "))
    .setColor('RANDOM')
    .setFooter('AMS');
  await msg.react('✅')
  await msg.react('❌')
  msg.guild.channels.find('name', 'votes').send({embed})
  await msg.react('✅')
  return msg.reply('**Голосование участника ${msg.author} отправлено**')
}
