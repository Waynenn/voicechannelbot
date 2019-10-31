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
    if (msg.author.id !== "256883010970976257") return;

    if (msg.content.startsWith(prefix)) {
        msg.delete()
    }
    if (msg.author.bot) return;

    // Ignore messages not starting with the prefix (in config.json)  
    // Our standard argument/command name definition.
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
  
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
  
    // Run the command
    cmd(client, msg, args)






})



client.on('ready', () => void("helo"))
client.login('NjMxMzc4MDc4ODIzNjEyNDMz.Xbo_Yg.DBx27vGukVHnLqlAKTZm8ITtchI')