exports.info = {description: 'Информация о пользователе', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {

var embed = new Dicord.RichEmbed()
  .setTitle("Информация о пользователе")
  .setDescription('**Ник**\n${msg.author.nickname}\n**Дискриминатор**\n${msg.author.discriminator}\n**Пользователь бот?**\n${msg.author.bot}\n**Айди**\n${msg.author.id}')
  .setThumbnail("https://cdn.discordapp.com/attachments/471411944880996353/471774813921476609/icons8-info-squared-80.png")
  msg.channel.send({embed})
