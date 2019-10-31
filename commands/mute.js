   
   
   module.exports = (client, msg, args) => {


   
    let member = msg.mentions.members.first() || msg.guild.members.find(mem => mem.user.username == args[0]);
    member.setDeaf(true, "idiot")
    return;
}


