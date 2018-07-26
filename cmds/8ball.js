var replies = ['Возможно', 'Я не уверен', 'Скорее всего - да', 'Скорее всего - нет', 'Это нереально', 'Да, конечно',
               'Нет, конечно', 'Ты ебобо?', 'Я не знаю', 'Скорее всего - да, чем нет, но может и нет - больше, чем да',
               'Очень много времени занимает обдумка твоего вопроса', 'Возможно, но нет', 
               /*
               'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again',
               'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'
               */
]

exports.info = {description: '~~Это вам не ask.fm~~', required: 'SEND_MESSAGES'}
exports.run = (client, msg, args) => {
  if(!args.join(' ')) return msg.reply('Я не умею угадывать твои мысли')
  var result = Math.floor((Math.random() * replies.length));
  msg.reply(replies[result]);
}