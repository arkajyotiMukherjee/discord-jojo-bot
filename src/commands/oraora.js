const Discord = require('discord.js');

module.exports = {
  name: 'oraora',
  description: 'DIO mudas you',
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('MUDA MUDA MUDA MUDA MUDA !!')
      .setImage(
        'https://gifimage.net/wp-content/uploads/2017/08/muda-muda-muda-gif-2.gif',
      );
    message.channel.send(embed);
  },
};
