  exports.info = {description: 'Выполнить', required: 'BOT_OWNERS'}
exports.run = async (client, msg, args) => {
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
