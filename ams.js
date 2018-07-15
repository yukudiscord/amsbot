/* Тестирование PocketGit */

var Discord = require('discord.js')
var req = require('snekfetch')
var client = new Discord.Client()

var p = '#'
var owners = ['321268938728144906', '341988428457705482']

client.on('ready', () => {
  console.log(client.user.tag);
  client.user.setActivity('пиши', {type: 'STREAMING'})
});

client.on('guildMemberAdd', member => {
  member.addRole('467526203713126410')
  var embed = new Discord.RichEmbed()
    .setTitle('Добро пожаловать на сервер AMS')
    .setDescription('Для дальнейшего общения просим прочитать #information. Там находится вся необходимая информация.')
    .setFooter('Спасибо, что присоединились именно к нам')
    .setThumbnail('https://cdn.discordapp.com/attachments/360125122717155328/467417487323955202/402342-svetik.jpg')
  member.send({embed})
});

client.on('message', async msg => {
  if(msg.author.bot) return
  if(msg.content.indexOf(p) !== 0) return

  var args = msg.content.slice(p.length).trim().split(/ +/g)
  var cmd = args.shift().toLowerCase()

  if(['help', 'помощь', 'помоги', 'памаги', 'помош', 'hlp', 'halp'].includes(cmd)) {
    var owner = await client.fetchUser('321268938728144906')
    var owner1 = await client.fetchUser('341988428457705482')
    var embed = new Discord.RichEmbed()
      .setTitle(`Вот ваша помощь, ${msg.author.tag}.`)
      .setDescription(`Бота делали @${owner.tag} и @${owner1.tag}.\n\n **Развлечения**\n  slap - Ударить кого-то\n  hug - Обнять кого-то\n  pet - Погладить кого-то\n  lizard - Увидеть ящерицу\n  kiss - Поцелуй\n\n**Основные**\n  eval - Выполнить код\n  ping - Проверить пинг бота\n  clear - Очистить сообщения\n  presence, game, stream, watch, listen - Изменить presence бота\n`)
      .setColor("RANDOM")
      .setFooter(`Префикс - #`)
    msg.channel.send({embed})
  }
  
 if (['eval', 'евал'].includes(cmd) && owners.includes(msg.author.id)) {
    var code = args.join(' ');
    try {
      let evaled = eval(code);
      if (!code) {
        return msg.channel.send('Для выполнения команды eval необходим код');
      }
      if (typeof evaled !== 'string')
        evaled = require('util').inspect(evaled)
        var embed = new Discord.RichEmbed()
          .setTitle(`Эвал успешно выполнен`)
          .setColor('0x4f351')
          .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(evaled)}\`\`\``)
        msg.channel.send({embed});
    } catch (err) {
      var embed = new Discord.RichEmbed()
        .setTitle('Ошибка выполнения кода')
        .setColor('0xff0202')
        .setDescription(`📥 Input: \n \`\`\`${code}\`\`\`\n 📤 Output:\n  \`\`\`${(err)}\`\`\``)
      msg.channel.send({embed});
   }
 }
  
  if(['ping', 'пинг'].includes(cmd)) {
    var embed = new Discord.RichEmbed()
      .setTitle('Пинг')
      .setDescription(`Пинг: ${Math.round(client.ping)}ms`)    
      .setColor("RANDOM")
    msg.channel.send({embed})
  }

  if(['hug', 'обнять'].includes(cmd)) {
    var user = msg.mentions.users.first()
    if(user) user = user.tag
    else user = 'воздух'

    var page = await req.get('https://nekos.life/api/v2/img/hug')
    var data = page.body.url
    var embed = new Discord.RichEmbed()
      .setTitle(`Ты обнял ${user}`)
      .setImage(data)
    msg.channel.send({embed})
  }

  if(['slap', 'punch', 'ударить'].includes(cmd)) {
    var user = msg.mentions.users.first()
    if(user) user = user.tag
    else user = 'воздух'

    var page = await req.get('https://nekos.life/api/v2/img/slap')
    var data = page.body.url
    var embed = new Discord.RichEmbed()
      .setTitle(`Ты ударил ${user}`)
      .setImage(data)
    msg.channel.send({embed})
  }

  if(['pat', 'погладить', 'pet'].includes(cmd)) {
    var user = msg.mentions.users.first()
    if(user) user = user.tag
    else user = 'себя'

    var page = await req.get('https://nekos.life/api/v2/img/pat')
    var data = page.body.url
    var embed = new Discord.RichEmbed()
      .setTitle(`Ты погладил ${user}`)
      .setImage(data)
    msg.channel.send({embed})
  } 
  
  if(['lizard', 'ящерица', 'ящер'].includes(cmd)) {
    var user = msg.mentions.users.first()
    if(user) user = user.tag
    else user = 'хрен знает кого'
    var page = await req.get('https://nekos.life/api/v2/img/lizard')
    var data = page.body.url
    var embed = new Discord.RichEmbed()
      .setTitle(`Ты увидел ${user}`)
      .setImage(data)
    msg.channel.send({embed})
  } 
  
   if(['kiss', 'поцеловать', 'kissing'].includes(cmd)) {
    var user = msg.mentions.users.first()
    if(user) user = user.tag
    else user = 'себя'

    var page = await req.get('https://nekos.life/api/v2/img/kiss')
    var data = page.body.url
    var embed = new Discord.RichEmbed()
      .setTitle(`Ты поцеловал ${user}`)
      .setImage(data)
    msg.channel.send({embed})
  } 

  if(['clear', 'purge', 'очистить'].includes(cmd)) {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Вы не можете использовать эту комманду.')
    var value = parseInt(args[0])
    var messages = await msg.channel.fetchMessages({limit: value})
    msg.channel.bulkDelete(messages)
  }

  if(['presence', 'game', 'stream', 'watch', 'watching', 'listen', 'listening'].includes(cmd) && owners.includes(msg.author.id)) {
    /*
    var presence = 0
    switch (cmd) {
      case 'watch':
        presence = 1
      case 'listen':
        presence = 2
    }
    */
    if(['presence', 'game'].includes(cmd)) cmd = 'playing'
    if(cmd == 'watch') cmd = 'watching'
    if(cmd == 'listen') cmd = 'listening'
    if(cmd == 'stream') client.user.setActivity(args.join(' '), {url: 'https://google.com'})
    else client.user.setActivity(args.join(' '), {type: cmd.toUpperCase()})
    msg.channel.send('Готово')
  }
})

client.login(process.env.TOKEN)
process.env.TOKEN = 'NULL'
