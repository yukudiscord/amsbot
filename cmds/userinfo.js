exports.info = {description: 'Информация о пользователе', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {
  var u1 = msg.mentions.users.first()
  var embed = new client.RichEmbed()
  .setTitle("Информация о " + '<@${u1.tag}>')
  .addField("Ник")
  .addValue('${u1.nickname}')
  .addField("Айди")
  .addValue('${u1.id}')
  .addField("Дискриминатор")
  .addValue('${u1.discriminator}')
  .addField("Айди последнего сообщения")
  .addValue('${u1.lastMessgeID')
  .setFooter("AMS")
  msg.channel.send({embed})

  if(!u1) return msg.reply("Вы не указали пользователя.")
