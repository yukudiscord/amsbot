exports.info = {description: 'Информация о пользователе', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {
  var u = msg.mentions.users.first() || Object.assign(msg.author, msg.member)
  var embed = new client.RichEmbed()
    .setTitle(`Информация о <@${u.tag}>`)
    .addField('Ник', u.nickname || u.username)
    .addField('Айди', u.id)
    .addField('Дискриминатор', u.discriminator)
    .addField('Айди последнего сообщения', u.lastMessageID)
    .addField('Тип аккаунта', u.bot ? 'Бот' : 'Юзер')
    .setImage(u.avatarURL)
    .setFooter('AMS')
  msg.channel.send({embed})
}