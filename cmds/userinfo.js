  var u1 = msg.mentions.users.first()
  var embed = new client.RichEmbed()
  .setTitle("Информация о " + '<@${u1.tag}>')
  .setDescription('Никнейм\n${u1.nickname}\n\nАйди\n${u1.id}\n\nДискриминатор\n${u1.discriminator}')
  .setFooter("AMS")
  msg.channel.send({embed})

  if(!u1) return msg.reply("Вы не указали пользователя.")
