var r = require('snekfetch')
exports.info = {description: 'Доступные эмоции: hug, slap, pat, lizard, kiss', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {
  var e = args.shift()
  var u = msg.mentions.users.first()
  if(!e) return msg.reply('Вы не указали реакцию!')
  if(!u) return msg.reply('Вы не упомянули человека')
  if(e == 'hug') {
    var page = await r.get('https://nekos.life/api/v2/img/hug')
    var embed = new client.RichEmbed()
      .setTitle(`${msg.author.tag} обнял ${u.tag}`)
      .setImage(page.body.url)
      .setColor('FFFFFF')
  }
  else if(e == 'slap') {
    var page = await r.get('https://nekos.life/api/v2/img/slap')
    var embed = new client.RichEmbed()
      .setTitle(`${msg.author.tag} ударил ${u.tag}`)
      .setImage(page.body.url)
      .setColor('FFFFFF')
  }
  else if(e == 'pat') {
    var page = await r.get('https://nekos.life/api/v2/img/pat')
    var embed = new client.RichEmbed()
      .setTitle(`${msg.author.tag} погладил ${u.tag}`)
      .setImage(page.body.url)
      .setColor('FFFFFF')
  }
  else if(e == 'lizard') {
    var page = await r.get('https://nekos.life/api/v2/img/lizard')
    var embed = new client.RichEmbed()
      .setTitle(`${msg.author.tag} увидел ${u.tag}`)
      .setImage(page.body.url)
      .setColor('FFFFFF')
  }
  else if(e == 'kiss') {
    var page = await r.get('https://nekos.life/api/v2/img/kiss')
    var embed = new client.RichEmbed()
      .setTitle(`${msg.author.tag} поцеловал ${u.tag}`)
      .setImage(page.body.url)
      .setColor('FFFFFF')
  }
  else {
    var embed = new client.RichEmbed()
      .setTitle('Ошибка')
      .setDescription('Такой реакции нету')
  }
  msg.channel.send(embed)
}