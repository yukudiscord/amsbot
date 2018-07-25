exports.info = {description: 'Очистить чат', required: 'MANAGE_MESSAGES'}
exports.run = async (client, msg, args) => {
  var value = parseInt(args[0])
  if(isNaN(value)) return msg.reply('Ты не указал сколько мне очистить сообщений')
  var messages = await msg.channel.fetchMessages({limit: value+1})
  msg.channel.bulkDelete(messages)
}