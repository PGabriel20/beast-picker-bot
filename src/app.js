const commando = require('discord.js-commando');
const bot = new commando.Client();
const {prefix, token, bot_info} = require('./config/config')

bot.registry.registerGroup('bicho','Beast');
bot.registry.registerCommandsIn(__dirname + '/commands')



bot.on('ready', ()=>{
  console.log('Bot running...')
})

bot.login(token)