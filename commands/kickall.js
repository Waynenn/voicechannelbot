module.exports = (client, msg, args) => {

let array = msg.guild.channels.array().filter(v => v.type == "voice")

for (var i = 0; i < array.length; i++) {
    let array2 = []
    array2.push(array[i].id)
    for (var i = 0; i < array2.length; i++) {
        let members = client.channels.get(array2[i]).members.array()
        for(var i = 0; i < members.length; i++) {
            members[i].setVoiceChannel(null)
        }

    }
}
    array2 = [];
    return;


}
