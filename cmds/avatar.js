var getImageColors = require('get-image-colors')
exports.info = {description: 'Украсть аватарку', required: 'MANAGE_MESSAGES'}
exports.run = async (client, msg, args) => {
          message.delete();
        let user = message.mentions.users.first();
        if (!user) user = message.author;
        getImageColors(user.avatarURL).then(color => {
            let c = color.map(col => col.hex());
        let embed = new Discord.RichEmbed()
            .setDescription(`Аватар ${user}`)
            .setColor("#ffffff")
            .setImage(user.avatarURL);
        message.channel.send({embed});
    } 
  }
