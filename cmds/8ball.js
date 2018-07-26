var replies = ['Возможно', 'Я не уверен', 'Скорее всего - да', 'Скорее всего - нет', 'Это нереально', 'Да, конечно',
               'Нет, конечно', 'Ты ебобо?', 'Я не знаю', 'Скорее всего - да, чем нет, но может и нет - больше, чем да',
               'Очень много времени занимает обдумка твоего вопроса', 'Возможно, но нет'
]

exports.info = {description: '~~Это вам не ask.fm~~', required: 'SEND_MESSAGES'}
exports.run = (client, msg, args) => {
  if(!args.join(' ')) return msg.reply(' ${client.emojis.get(client.ball)} Я не умею угадывать твои мысли')
  var result = Math.floor((Math.random() * replies.length));
  msg.reply(replies[result]);
}
