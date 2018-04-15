const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("ed!");
  

bot.login('NDM0ODQ4MzI0MjA2NTkyMDE5.DbSwHw.NHtgcOV7IYHZ5ZNUmlDtgPDR4Sg')
console.log("Caca")

bot.on('ready', function (){
    bot.user.setPresence({ game: { name: "TU PEUT MODIFER"}})
})