const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
client.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

let prefix = '!'
client.on('message', (msg) => {
    if (msg.author.id !== client.user.id) return;

    if (msg.content.startsWith(prefix)) {
        msg.delete()
    }


    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    const cmd = client.commands.get(command);
  
    if (!cmd) return;
  
    // Run the command
    cmd(client, msg, args)






})



client.on('ready', () => void("helo"))
client.login('')
