module.exports = (client, msg, args) => {

 let array = msg.guild.members.array()

    for (var i = 0; i < array.length; i++) {
        console.log('hello  ')
        array[i].setVoiceChannel(null)
        
    }
    return;

}