var Discord = require('discord.js')
var req = require('snekfetch')
var client = new Discord.Client()

var p = '#'
    alphabet /*BET*/ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    owners = ['321268938728144906', '341988428457705482']
    reports_id = '468071121963581440'
    random = array => { return array[Math.floor(Math.random()*array.length)] }

client.on('ready', () => {
  console.log(client.user.tag);
  client.user.setActivity('#help | AMS', {type: 'STREAMING'})
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
      .setDescription(`Бота делали ${owner.tag} и ${owner1.tag}.\n\n **Развлечения**\n  slap - Ударить кого-то\n  hug - Обнять кого-то\n  pet - Погладить кого-то\n  lizard - Увидеть ящерицу\n  kiss - Поцелуй\n  password [length] - Рандомный пароль\n\n **Модерация**\n  kick - Кикнуть пользователя\n  ban - Забанить пользователя\n\n **Основные**\n  eval - Выполнить код\n  ping - Проверить пинг бота\n  clear - Очистить сообщения\n  presence, game, stream, watch, listen - Изменить presence бота\n  report [user] [rule] [description] - Сделать репорт на участника\n\n`)
      .setColor("RANDOM")
      .setFooter(`Префикс - #`)
    msg.channel.send({embed})
    msg.delete();
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
      msg.delete();
   }
 }
  
  if(['ping', 'пинг'].includes(cmd)) {
    var embed = new Discord.RichEmbed()
      .setTitle('Пинг')
      .setDescription(`Пинг: ${Math.round(client.ping)}ms`)    
      .setColor("RANDOM")
    msg.channel.send({embed})
    msg.delete();
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
    msg.delete();
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
    msg.delete();
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
    msg.delete();
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
    msg.delete();
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
    msg.delete();
  } 

  if(['clear', 'purge', 'очистить'].includes(cmd)) {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Вы не можете использовать эту комманду.')
    var value = parseInt(args[0])
    var messages = await msg.channel.fetchMessages({limit: value})
    msg.channel.bulkDelete(messages)
    msg.delete();
  }

  if(['presence', 'game', 'stream', 'watch', 'watching', 'listen', 'listening'].includes(cmd) && owners.includes(msg.author.id)) {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Вы не можете использовать эту комманду.')
    if(['presence', 'game'].includes(cmd)) cmd = 'playing'
    if(cmd == 'watch') cmd = 'watching'
    if(cmd == 'listen') cmd = 'listening'
    if(cmd == 'stream') client.user.setActivity(args.join(' '), {url: 'https://google.com'})
    else client.user.setActivity(args.join(' '), {type: cmd.toUpperCase()})
    msg.channel.send('Готово')
    msg.delete();
  }

  if(['kick', 'кик', 'кикнуть'].includes(cmd)) {
    if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('Вы не можете использовать эту комманду.')
    var user = msg.mentions.users.first()
    if(!user) return msg.reply('Вы не упомянули юзера')
    var member = await msg.guild.fetchMember(user)
    console.log(member)
    if(member.highestRole.position >= msg.member.highestRole.position) return msg.reply('Вы не можете его кикнуть (одинаковая роль или выше)')
    if(!member.kickable) return msg.reply('Я не могу его/её кикнуть')
    member.kick()
    msg.channel.send(`${user.tag} кикнут!`)
    msg.delete();
  }

  if(['ban', 'бан', 'забанить'].includes(cmd)) {
    if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('Вы не можете использовать эту комманду.')
    var user = msg.mentions.users.first()
    if(!user) return msg.reply('Вы не упомянули юзера')
    var member = await msg.guild.fetchMember(user)
    console.log(member)
    if(member.highestRole.position >= msg.member.highestRole.position) return msg.reply('Вы не можете его забанить (одинаковая роль или выше)')
    if(!member.banable) return msg.reply('Я не могу его/её забанить')
    member.ban()
    msg.channel.send(`${user.tag} забанен!`)
    msg.delete();
  }

  if(['report', 'репорт', 'жалоба'].includes(cmd)) {
    args.shift()
    var user = msg.mentions.users.first()
    if(!user) return msg.reply('Ты должен указать пользователя')
    var rule = args.shift()
    if(!rule) return msg.reply('Ты должен указать правило')
    var text = args.join(' ')
    if(!text) return msg.reply('Ты должен указать описание')
    var img = msg.attachments.first()
    if(!img) return msg.reply('Ты должен добавить скриншот')
    var embed = new Discord.RichEmbed()
      .setAuthor(msg.author.tag, msg.author.avatarURL)
      .setTitle('\nРепорт')
      .setDescription(text)
      .addField('\nНарушенное правило', rule)
      .addField('Нарушитель', `${user.tag} | ${user.id}`)
      .setImage(img.url)
    client.channels.get(reports_id).send({embed})
    msg.delete()
    msg.reply('Репорт успешно отравлен')
  }

  if(['password', 'pswd', 'randompass', 'randompassword', 'пароль'].includes(cmd)) {
    var res = ''
    var range = parseInt(args[0])
    if(isNaN(range)) range = 8
    if(res.legth < 6) range = 6
    for(var i = 0;i<range;i++) {
      res += random(alphabet.concat(numbers))
    }
    msg.author.send(res)
    msg.reply('Чекни лс')
  }
})

client.login(process.env.TOKEN)
process.env.TOKEN = 'NULL'
