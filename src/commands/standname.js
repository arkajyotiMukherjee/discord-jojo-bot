const randomName = require('../utils/randomName');

module.exports = {
  name: 'standname',
  description: 'Ping!',
  execute(message, args) {
    message.reply(randomName.standName());
  },
};
