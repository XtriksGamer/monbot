const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("m!");
  

bot.login('NDM0ODQ4MzI0MjA2NTkyMDE5.DbSwHw.NHtgcOV7IYHZ5ZNUmlDtgPDR4Sg')
console.log("Caca")

bot.on('ready', function (){
    bot.user.setPresence({ game: { name: "| Bot Moderator |"}})
})

  if (message.content === (prefix + "help")){
        var help_embed = new Discord.RichEmbed()
           .setColor('#269f26')
            .addField("[**Développement**]", "Désolé cette commande es en developement")
           .setFooter("moderator bot")        
           message.channel.send(help_embed)
    }
