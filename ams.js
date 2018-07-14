const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(client.user.tag);
});

client.on('message', msg => {
  if (msg.content === 'а') {
    msg.reply('б!');
  }
});

client.login(process.env.TOKEN)
process.env.TOKEN = 'NULL'
