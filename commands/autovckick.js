module.exports = (client, msg, args) => {

    setInterval(() => {
          let member = msg.guild.members.find(mem => mem.user.username == args[0]) || msg.mentions.members.first()
          let voicechannel = member.voiceChannel
          if (!voicechannel) {
              console.log('he did not join the channel yet')
          } else {
              member.setVoiceChannel(null)
              console.log('hehe got him')
          }
    }, 3000);
    



}