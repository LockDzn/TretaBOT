const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.react("🤖")
   message.channel.send(`${message.author}, irei mandar a lista de comandos no seu privado! :)`)
   const ajuda1 = new Discord.RichEmbed()
      .setAuthor(`Ajuda do TretaBOT`)
      .setDescription("**TODOS MEUS COMANDOS ABAIXO:**")
      .setThumbnail(client.user.avatarURL)
      .setColor("#00a4ce")
      .setFooter("© TretaBOT - bit.ly/LockDzn")

   const ajuda2 = new Discord.RichEmbed()
      .setAuthor(`Moderação`)
      .setDescription(`*Comandos que vão ajudar a moderador o servidor!* 
\n**!mute** @usuário motivo - Ira mutar o usuário mencionado.
**!unmute** @usuário - Ira desmutar o usuário mencionado.
**!ban** @usuário motivo - Ira banir o usuário mencionado do seu servidor do discord.
**!anuncio** mensagem do anuncio - Ira mandar um anuncio no chat que o comandos foi executado.`)
      .setThumbnail("https://i.imgur.com/ZmWM1UT.png")
      .setColor("#ff0000")
      .setFooter("© TretaBOT Moderação")
   
      message.author.send(ajuda1)
      message.author.send(ajuda2)
   
   
}
