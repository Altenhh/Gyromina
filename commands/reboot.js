// [DEPRECATED AS OF 0.9.0]

/*
const package = require('../package.json');

module.exports.run = {
  execute(message, args) {
    // Gets the 'gyrominaNo' and 'gyrominaYes' emojis
    const nope = message.client.emojis.get("493575012276633610");
    const yep = message.client.emojis.get("493570632785723402");

    // Checks to see if the bot owner (L375#6740) sent the message.
    if(message.author.id !== package.authorID) {
      message.channel.send(`${nope} Error - Insufficient permissions!`)
      console.log('A user attempted to reboot me, but was unsuccessful!')
      return;
    }

    // Shuts down the current instance of the Discord Client.
    message.channel.send(`${yep}`);
    message.client.user.setStatus("invisible");
    console.log(`Rebooting ${message.client.user.tag}...\n- - - - - - - - - - -`);
    message.client.destroy();
    // Reboots Gyromina by logging back into Discord with Gyromina's token
    message.client.login(process.env.token);
  },
};
*/

module.exports.help = {
  "name": "reboot",
  "aliases": "restart",
  "description": "Reboots Gyromina. [DEPRECATED AS OF 0.9.0]",
  "usage": `${process.env.prefix}reboot`,
  "hide": 0,
  "wip": 0,
  "dead": 1,
};
