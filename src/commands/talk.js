module.exports = {
  name: 'talk',
  description: 'say something after a space',
  args: true,
  usage: '<say something like MUDA MUDA MUDA!>',
  execute(message, args) {
    if (args[0]) {
      return message.channel.send(
        `Kono ${message.author} says, ${args.join(' ')}`,
      );
    }

    message.channel.send(
      `Arguments: ${args}\nArguments length: ${args.length}`,
    );
  },
};
