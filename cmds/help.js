var fs = require('fs')
exports.info = {description: 'Показать все комманды', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {
  var cmd = args.shift()
  if(cmd) {
    try {
      var r = require(`./${cmd}.js`)
      var embed = new client.RichEmbed()
        .setTitle('Помощь')
        .setDescription(`${client.emojis.get(client.info)} ${cmd} - **${r.info.description}**\nНеобходимо право: __${r.info.required}__`)
        .setColor('FFFFFF')
      msg.channel.send({embed})
    } catch(e) {
      msg.reply('Такой комманды нету!')
    }
  }
  else {
    var res = ''
    fs.readdirSync('./cmds/').forEach(cmd => {
      var r = require(`./${cmd}`)
      var desc = r.info.description.split('\n')[0]
      var perm = r.info.required
      if(perm == 'BOT_OWNERS') {
        if(!client.owners.includes(msg.author.id)) return
      }
      else {
        if(!msg.member.hasPermission(perm)) return
      }
      res += `${cmd.replace('.js', '')} - **${desc}**\n`
    })
    var embed = new client.RichEmbed()
      .setTitle('Помощь')
      .setDescription(res)
      .setColor('FFFFFF')
    msg.author.send({embed})
  }
}
