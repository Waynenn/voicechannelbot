   
   
   module.exports = (client, msg, args) => {


   
    let member = msg.mentions.members.first()
    if (!msg.mentions.members.first()) return msg.channel.send('woopsi i forgot to mention a user').then(m => m.delete())
    member.setDeaf(true, "idiot")
    return;
}


