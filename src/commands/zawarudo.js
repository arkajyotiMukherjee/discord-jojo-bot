module.exports = {
  name: 'zawarudo',
  description: 'DIO counts down...',
  execute(message, args) {
    const dialouge = [
      'Ichi byou keika',
      'Ni byou keika',
      'San byou keika',
      'Yon byou keika',
      'Go byou keika',
      'Roku byou keika',
      'Nana byou keika',
      'ROOOODO ROOOLAAA DA!!!',
    ];
    let i = 0;

    message.channel.send('TOKI WO TOMARE !');

    const dialougeInterval = setInterval(() => {
      if (i < dialouge.length) {
        message.channel.send(dialouge[i++]);
      }
    }, 1000);

    if (i >= dialouge.length - 1) {
      clearInterval(dialougeInterval);
    }
  },
};
