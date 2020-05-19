const Discord = require('discord.js');

module.exports = {
  name: 'approach',
  description: 'Dare to approach DIO!',
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Approaching...')
      .setDescription(
        'The greatest dialouge exchange of all time. If you disagree you are Ceiling gang...Cringe bro!',
      )
      .setThumbnail(
        'https://scontent.fccu5-1.fna.fbcdn.net/v/t1.0-9/92759373_110903443909355_7931426783088345088_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=A8lUkELX-YwAX9Ul4ar&_nc_ht=scontent.fccu5-1.fna&oh=710a1ab9472d8ff9bb92a77b22bb2476&oe=5EE6A29E',
      )
      .addFields(
        { name: 'DIO', value: 'Tsugi wa Jotaro, kisama da!' },
        { name: 'Jotaro', value: 'Yarou… DIO!' },
        {
          name: 'DIO',
          value:
            'Ho… mukatta kuruno ka? Nigetsu ni kono DIO ni chikazuite kuruno ka? Sekkaku sofu no Josefu ga watashi no Za Warudo no shotai wo. Shiken shuryu chaimu chokuzen made mondai yo toitte iru jukensee ne you na? Kisshi koita kibun de wo shietekure ta to yuu no ni?',
        },
        {
          name: 'Jotaro',
          value: 'Chikadzu kanaka teme wo buchi no me tenain de na.',
        },
        { name: 'DIO', value: 'Hoho! Dewa juubun chikazukanai youi.' },
        { name: 'Jotaro', value: 'Ora!' },
        {
          name: 'DIO',
          value:
            'Noroi, noroi! Za Warudo wa saikyou no Sutando da. Jikan wa tomezetomo, supiido to paowa to te omae no Suta Purachina yoryuu enna no towa!',
        },
        {
          name: 'Jotaro',
          value:
            'Ore no Suta Purachina to onaji taipu wo Sutando nara. Enkyori enai kenai da, paowa to semitsu na bokina dekiru.',
        },
      )
      .setImage(
        'https://pm1.narvii.com/7167/6a705b2180bb5f3ad36866b2088f1b55e6993808r1-495-581v2_hq.jpg',
      );
    message.channel.send(embed);
  },
};
