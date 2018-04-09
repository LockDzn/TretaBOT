const Discord = require('discord.js');
const client = new Discord.Client();
const preferencias = require('./config.json');
const prefix = preferencias.prefix;
const fs = require('fs');
var comandos = new Discord.Collection();

client.login(process.env.BOT_TOKEN);

client.on('ready', () =>{

console.log('O Bot foi iniciado com sucesso.');
console.log(`O meu prefixo é ${prefix}`);
  
client.user.setPresence({ game: { name: 'tretas!', type: 3 } });
  
  
});



client.on('message', message =>{

var autor = message.author;
var msg = message.content.toUpperCase();
var cont = message.content.slice(prefix.lenght).split('');
  
if(message.channel.type === "dm") return;
if(!message.content.startsWith(prefix)) return;
// ban
//if(message.author.id === "244537374258888725" || message.author.id === "244537374258888725") return;
//if(message.author.id === "244537374258888725") return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
   } catch (err) {
     console.log('ERRO! PROVAVELMENTE ALGUÉM DIGITOU UM COMANDO QUE NÃO ESTA NO MEU BANCO DE DADOS')
   }
  
});
