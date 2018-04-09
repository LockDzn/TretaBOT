const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});

   if (message.member.hasPermission('MANAGE_GUILD')) {
   let mensg = args.join(" ");
   if(!mensg)
      return message.reply("Por favor, digite a mensagem do anuncio!");
      
   const anuncio = new Discord.RichEmbed()
      .setColor("0cff00")
      .setAuthor(":loudspeaker: Anúncio")
      
      .setDescription(mensg)
      
      .setTimestamp()
      .setFooter(`Por: ${message.author.tag}`, message.author.avatarURL)
   
   message.channel.send("@everyone", anuncio)
   
   }
}
