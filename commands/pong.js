module.exports.run = {
  execute(message, args) {
    // Pings the channel by sending a message
    let start = Date.now();
    message.channel.send('Ponging...? 🏓')
      .then(newMsg => {
        let end = Date.now();
        // Edits the message to include Gyromina's latency and Discord's latency.
        newMsg.edit(`Ping? 🏓\nLatency: \`${end - start}ms\` / Discord: \`${message.client.ping}ms\``);
      });
  },
};
  
module.exports.help = {
  "name": 'pong',
  "description": 'Pongs Gyromina. (Functions similarly to ' + process.env.prefix + 'ping)',
  "usage": `${process.env.prefix}pong`,
  "hide": 0,
  "wip": 0,
  "dead": 0,
};
  