exports.info = {description: 'Голосование', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {
    var embed = new Discord.RichEmbed()
    .setTitle("Голосование")
    .setDescription(args.join(" "))
    .setColor('RANDOM')
    .setFooter('AMS');
    msg.guild.channels.get('471794934354018306').send({embed}).then(async (sent) => {
  await sent.react('✅')
  await sent.react('❌')
  await sent.react('✅')
  return msg.reply('**Голосование успешно начато**')
        })
 
