const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const servers = {};
let playing = false;

const play = (connection, message) => {
  const server = servers[message.guild.id];

  ytdl.getInfo(server.queue[0]).then((info) => {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Now Playing 🎶')
      .setDescription(`Playing ${info.title}...`);
    message.channel.send(embed);
  });

  server.dispatcher = connection.play(
    ytdl(server.queue[0], { filter: 'audioonly', quality: 'highestaudio' }),
  );

  server.dispatcher.on('finish', () => {
    server.queue.shift();
    if (server.queue[0]) {
      message.channel.send('Playing next song in the queue...');
      play(connection, message);
    } else {
      message.channel.send('No more songs to play :(');
      playing = false;
      connection.disconnect();
    }
  });

  server.dispatcher.on('error', console.error);
};

module.exports = {
  name: 'play',
  description: 'plays a song',
  args: true,
  usage: '<try kira or paste mp3/youtube url>',
  execute(message, args) {
    const memberVoiceChannel = message.member.voice.channel;
    if (!memberVoiceChannel) {
      return message.reply('You must join a voice channel to play music');
    }

    if (!servers[message.guild.id]) {
      servers[message.guild.id] = { queue: [] };
    }

    const server = servers[message.guild.id];

    const link = args[0];
    if (!ytdl.validateURL(link)) {
      message.reply('Please provide a valid url');
    }
    if (server.queue.includes(link)) {
      return message.reply('That song is already playing or in the queue!');
    }
    server.queue.push(link);
    ytdl
      .getInfo(link)
      .then((info) => message.channel.send(`Added ${info.title} to the queue`));

    if (playing === false) {
      memberVoiceChannel.join().then((connection) => {
        playing = true;
        play(connection, message);
      });
    }
  },
};
