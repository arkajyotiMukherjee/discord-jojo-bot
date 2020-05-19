const Discord = require('discord.js');

module.exports = {
  name: 'lerolero',
  description: 'You get mentally licked by Noriaki Kakyoin',
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Lero Lero Lero Lero...')
      .setImage(
        'https://pa1.narvii.com/5937/5345adbcf8c9a420469727d5aa0227d30818f691_hq.gif',
      );
    message.channel.send(embed);
  },
};
