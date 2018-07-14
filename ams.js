var Discord = require('discord.js')
var req = require('snekfetch')
var client = new Discord.Client()

var p = '#'
var owners = ['321268938728144906', '341988428457705482']
var ms = require("ms");

client.on('ready', () => {
  console.log(client.user.tag);
  client.user.setActivity('бот гатов', {type: 'STREAMING'})
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

  if(['help', 'помощь', 'halp'].includes(cmd)) {
    var owner = await client.fetchUser('321268938728144906')
    var owner1 = await client.fetchUser('341988428457705482')
    var embed = new Discord.RichEmbed()
      .setTitle(`Вот ваша помощь, ${msg.author.tag}.`)
      .setDescription(`Бота делали @${owner.tag} и @${owner1.tag}.\n\n **Развлечения**\n  slap - ударить кого-то\n  hug - обнять кого-то\n  pet - погладить кого-то\n  lizard - увидеть ящерицу\n\n**Основные**\n  eval - выполнить\n\n`)
      .setColor("RANDOM")
      .setFooter(`Префикс - #`)
    msg.channel.send({embed})
  }
  
 if (['eval', 'евал'].includes(cmd) && ['321268938728144906', '341988428457705482'].includes(msg.author.id)) {
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

  if(['hug', 'обнять'].includes(cmd)) {
    var page = await req.get('https://nekos.life/api/v2/img/hug')
    var data = page.body.url
    var embed = new Discord.RichEmbed()
      .setTitle('Ты обнял хрен знает кого')
      .setImage(data)
    msg.channel.send({embed})
  }

  if(['slap', 'punch', 'ударить'].includes(cmd)) {
    var page = await req.get('https://nekos.life/api/v2/img/slap')
    var data = page.body.url
    var embed = new Discord.RichEmbed()
      .setTitle('Ты ударил хрен знает кого')
      .setImage(data)
    msg.channel.send({embed})
  }

  if(['pat', 'погладить', 'pet'].includes(cmd)) {
  var page = await req.get('https://nekos.life/api/v2/img/pat')
  var data = page.body.url
  var embed = new Discord.RichEmbed()
      .setTitle('Ты погладил хрен знает кого')
      .setImage(data)
    msg.channel.send({embed})
  } 
  
  if(['lizard', 'ящерица', 'ящер'].includes(cmd)) {
  var page = await req.get('https://nekos.life/api/v2/img/lizard')
  var data = page.body.url
  var embed = new Discord.RichEmbed()
      .setTitle('Ты увидел хрен знает кого')
      .setImage(data)
    msg.channel.send({embed})
  } 

client.login(process.env.TOKEN)
process.env.TOKEN = 'NULL'
