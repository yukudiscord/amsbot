var getImageColors = require('get-image-colors');

exports.info = {description: 'Спиздить чей-то аватар', required: 'SEND_MESSAGES'}
exports.run = (client, msg, args) => {
                var mentions1 = message.mentions
		const embed = new Discord.RichEmbed()
		.setTitle('Аватар пользователя:')
                .setColor('#ffffff')
	 .setImage(message.mentions.users.first().avatarURL)
		 message.channel.send({embed})
	}
}
