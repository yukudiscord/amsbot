exports.info = {description: 'Сказать от имени бота', required: 'BOT_OWNERS'}
exports.run = (client, msg, args) => {
  msg.channel.send(args.join(' '))
  msg.delete()
}