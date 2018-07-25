var r = require('request')
exports.info = {description: 'Проверить сайт [не работает]', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {
  
 var url = args[0]
    if(!url) url = 'https://google.com'
    try {
      var warn = 'Это не логгер'
      request.get({url, followAllRedirects: true}, (_1, page, _2) => {
        Object.keys(loggers).forEach(log => {
          if(loggers[log].includes(page.host)) {
            warn = `Замечен логгер от сайта ${log}`
          }
        })
        if(page.host.endsWith('.ngrok.io')) warn = 'На этом сайте может быть что угодно'
        if(page.host.endsWith('.serveo.net')) warn = 'На этом сайте может быть что угодно'
        if(page.host.endsWith('.herokuapp.com')) warn = 'Этот сайт на бесплатном хостинге, тут может быть что угодно'
        if(page.host.endsWith('.000webhostapp.com')) warn = 'Этот сайт на бесплатном хостинге, тут может быть что угодно'
        if(page.host.endsWith('.epizy.com')) warn = 'Этот сайт на бесплатном хостинге, тут может быть что угодно'
        if(page.host.endsWith('.rf.gd')) warn = 'Этот сайт на бесплатном хостинге, тут может быть что угодно'
        msg.channel.send(warn)
      })
    } catch(e) {
      msg.reply('Я не могу открыть страницу')
    }
  }
