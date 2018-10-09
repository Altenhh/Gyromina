const Discord = require('discord.js');

function getRandomDecimal(min, max, decims) {

  var places = Math.round(decims);
  var factor = Math.pow(10, places);

  min = Math.ceil(min * factor);
  max = Math.floor(max * factor);

  var num = Math.floor(Math.random() * (max - min)) + min + 1;
  if (num >= 0 && num >= max) {
    num = max;
  } else if (num <= 0 && num <= min) {
    num = min;
  }

  return (num / factor);
}

module.exports = {

  name: "randomdecimal",
  aliases: ["decimal", "rd"],
  description: "Generates a random decimal number between 0 and 1 to a certain amount of decimal places (0-16). Defaults to 10 decimal places if unspecified.",
  execute(message, args) {

    var number = 0;
    var fail = false;

    if (!args.length) {
      number = getRandomDecimal(0, 1, 10);
    } else if (args[0] < 0) {
      fail = true;
      message.reply("I can\'t generate a decimal number to a negative amount of decimal places!");
    } else if (args[0] >= 0) {
      number = getRandomDecimal(0, 1, args[0]);
    }

    if (fail === false) {
      const embed = new Discord.RichEmbed()
        .setTitle("\`" + number + "\`")
        .setColor(0x7effaf);

        message.reply("here you go!", {embed});
    }
  }
}