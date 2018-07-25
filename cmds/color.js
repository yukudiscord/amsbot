exports.info = {description: 'Сделать вам цвет', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {
  var color = args[0]
  if(!color) return msg.reply('Ты должен указать цвет')
  msg.member.roles.forEach(role => {
    if(role.name.startsWith('🎨 ')) {
      if(role.members.size == 1) role.delete()
      else msg.member.removeRole(role)
    }
  })
  var role = msg.guild.roles.find('name', `🎨 ${color}`)
  if(!role) role = await msg.guild.createRole({name: `🎨 ${color}`, color})
  msg.member.addRole(role)
  msg.channel.send('Готово!')
}