const commando = require('discord.js-commando');
const { sendEmbedMessage } = require('../../utils/embed')
const { beasts } = require('../../database/beasts.json');

class Beast extends commando.Command{
    constructor(client){
        super(client,{
            name: 'bicho',
            group: 'bicho',
            memberName: 'bicho',
            description: 'Sorteia um bicho'
        });
    }

    async run(message, args){

      message.reply(`Rodando Bicho...`)
      
      let interval = 5000;

      setTimeout(()=>{
        const allNumbers = beasts.map(beast => beast.numbers).flat()

        var pickedNumber = allNumbers[Math.floor(Math.random()*allNumbers.length)] 

        const pickedBeast = beasts.filter((beast)=>{
          if(beast.numbers.join().includes(pickedNumber)){
            return beast
          }
        })
        sendEmbedMessage(message, pickedBeast, pickedNumber)
      }, interval)
    }
}

module.exports = Beast;