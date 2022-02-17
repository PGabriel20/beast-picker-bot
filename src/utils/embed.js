const Discord = require('discord.js');
const { getRandomColor } = require('./randomColor')

async function sendEmbedMessage(message, bichoSorteado, numeroSorteado){
  const bicho = bichoSorteado[0]

  const embed = new Discord.MessageEmbed()
  .setColor(getRandomColor())
  .setTitle(bicho.name)
  .setDescription(``)
  .addFields(
    {name: `Nº Sorteado:`, value: numeroSorteado, inline: true}
  )
  .setImage(bicho.imageURL)
  .setFooter("\u2800".repeat(16))

  return message.channel.send(embed)
}

module.exports = {
  sendEmbedMessage
}