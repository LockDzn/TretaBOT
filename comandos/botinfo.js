const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) =>{
   
   const dono = message.guild.members.get("244537374258888725");
   
    var date = new Date(client.uptime);
    var uptime = '';
   
   const d = uptime += date.getUTCDate() - 1 + 'd, ';
   const h = uptime += date.getUTCHours() + 'h, ';
   const m = uptime += date.getUTCMinutes() + 'm, ';
   const s = uptime += date.getUTCSeconds() + 's';
   
   const info = new Discord.RichEmbed()
      .setColor("#0092ca")
      .setAuthor(client.user.username, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)

   
      .setDescription(`Olá, eu sou o TretaBOT, sou irmão do [Kally](https://kally.glitch.me/), não sei se você conhece ele, mais foi o criador dele que me criou!`)
   
      .setFooter("TretaBOT foi criado por LockDzn - Site: bit.ly/LockDzn", dono.user.avatarURL)
   
   message.channel.send(info)
   
}
