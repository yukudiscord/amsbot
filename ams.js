var Discord = require('discord.js')
var client = new Discord.Client()

require('events').EventEmitter.prototype._maxListeners = 100
client.p = '#'
client.sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
client.owners = ['341988428457705482', '406343162651738112']
client.loggers = {
  'iplogger.com': ['iplogger.com', 'iplogger.org', 'iplogger.ru', '2no.co', 'yip.su'],
  'grabify.link': ['grabify.link', 'starbucksisbadforyou.com', 'bmwforum.co', 'leancoding.co', 'quickmessage.io', 'spottyfly.com', 'spötify.com', 'stopify.co', 'yoütu.be', 'yoütübe.co', 'yoütübe.com', 'xda-developers.io', 'starbucksiswrong.com', 'starbucksisbadforyou.com', 'bucks.as', 'discörd.com', 'minecräft.com', 'cyberh1.xyz', 'discördapp.com', 'freegiftcards.co', 'disçordapp.com', 'iany.pl', 'my-alts.eu', 'l-imgur.pl', 'exec-true.eu', 'tigercore.eu']
}
client.RichEmbed = Discord.RichEmbed

client.on('ready', () => {
  console.log(client.user.tag);
})

client.on('message', msg => {
  if(msg.author.bot) return
  if(msg.content.indexOf(client.p) !== 0) return
  var args = msg.content.slice(client.p.length).trim().split(/ +/g)
  var cmd = args.shift().toLowerCase()

  try { var req = require(`./cmds/${cmd}.js`) }
  catch(e) { return console.log(e) }
  
  var perm = req.info.required
  if(perm == 'BOT_OWNERS') {
    if(!client.owners.includes(msg.author.id)) return msg.reply(`Вы не можете использовать эту комманду. Необходимо право: ${perm}`)
  }
  else {
    if(!msg.member.hasPermission(perm)) return msg.reply(`Вы не можете использовать эту комманду. Необходимо право: ${perm}`)
  }
  try { req.run(client, msg, args) }
  catch (e) { console.warn(e) }
})

client.login(process.env.TOKEN)
process.env.TOKEN = 'NULL'
