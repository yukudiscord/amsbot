function reverse(x) {
  var str = x.toString()
  var res = str.split('')
  var res = res.reverse()
  var res = res.join('')
  return parseInt(res)
}

exports.info = {description: 'Насколько юзер гей? :thinking:', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {
  var u = msg.mentions.users.first()
  if(!u) u = msg.author
  var rated = reverse(u.id)%100
  var embed = new client.RichEmbed()
    .setTitle('Измеритель Гейства 3000')
    .setDescription(`<@${u.id}> на ${rated}% гей ${client.emojis.get(client.gaypride)}`)
  msg.channel.send({embed})
}
