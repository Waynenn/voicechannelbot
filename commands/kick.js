module.exports = (client, msg, args) => {

    if (!msg.mentions.members.first()) return msg.channel.send('woopsi i forgot to mention a user').then(m => m.delete())
    let member = msg.mentions.members.first()
    member.setVoiceChannel(null)
    return;

}