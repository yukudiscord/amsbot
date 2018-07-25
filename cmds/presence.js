exports.info = {description: 'Изменить presence бота', required: 'BOT_OWNERS'}
exports.run = (client, msg, args) => {
  var pr = ['PLAYING', 'STREAMING', 'LISTENING', 'WATCHING']
  var type = args.shift()
  if(!type) return msg.reply(`Вы должны указать тип (${pr.join(' ')})`)
  if(!pr.includes(type)) {
    args.unshift(type)
    type = pr[0]
  }
  client.user.setActivity(args.join(' ') || '#help', {type})
}