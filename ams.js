var Discord = require('discord.js');
var client = new Discord.Client();

var p = '#'
var owners = ['321268938728144906', '341988428457705482']

client.on('ready', () => {
  console.log(client.user.tag);
  client.user.setActivity('#help', {type: 'PLAYING'})
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
  if(msg.author.bot) return;
  if(msg.content.indexOf(p) !== 0) return;

  var args = msg.content.slice(p.length).trim().split(/ +/g);
  var cmd = args.shift().toLowerCase();

  if(['help', 'помощь'].includes(cmd)) {
    var owner = await client.fetchUser('321268938728144906')
    var embed = new Discord.RichEmbed()
      .setTitle(`Вот ваша помощь, ${msg.author.tag}`)
      .setDescription(`Бота сделал "${owner.tag}". \nКомманды:\n  eval - Выполнить код`) 
      .setColor("RANDOM")
    msg.channel.send({embed})
  }

  if(['eval', 'евал'].includes(cmd)) {
    if(!owners.includes(msg.author.id)) 
      var embed = new Discord.RichEmbed()
        .setTitle('Ошибка')
        .setDescription('Вы не можете использовать эту комманду')
      return msg.channel.send({embed})
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
});

client.login(process.env.TOKEN)
process.env.TOKEN = 'NULL'
