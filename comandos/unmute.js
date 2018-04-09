const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.member.hasPermission('MANAGE_MESSAGES')) {
   let member = message.mentions.members.first();
   if(!member)
      return message.reply("por favor, mencione um usuário valido. Você não mencionou o usuário ou ele não esta aqui no servidor. :x:");

   if (!message.guild.roles.find("name", "Mutado")) {
      
      const norole = new Discord.RichEmbed()
         .setColor("ff0000")
         .setAuthor('Deu um erro', client.user.avatarURL)
         
         .setDescription(`${message.author}, o cargo **Mutado** não foi encontrado. :slight_frown: 
Crie um cargo com o nome "**Mutado**", assim poderei desmutar o usuário!`)
      
      
         .setTimestamp()
         .setFooter("© TretaBOT ERRO", message.author.avatarURL)
      
      message.channel.send(norole)
      
      
     } else {
        let role = message.guild.roles.find("name", "Mutado");
        member.removeRole(role)
        
        const mutado = new Discord.RichEmbed()
           .setAuthor(member.user.tag + ' | Mute', member.user.avatarURL)
           .setDescription(`${member.user.tag} (ID: ${member.user.id}) foi desmutado! HEEYY! Agora respeite as regras. :wink: `)
           .setColor("ff0000")

           .setThumbnail(message.author.avatarURL)

           .setTimestamp()
           .setFooter("© TretaBOT Moderação", message.author.avatarURL)


           .addField("Staffer:", message.author)
        
        client.channels.get("414518779410644995").send(mutado)
        message.reply("usuário desmutado! :white_check_mark: ")
     }
  
   } else {
      message.reply("você não tem permissão! :x:")
  }
}
