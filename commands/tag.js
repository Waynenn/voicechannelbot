module.exports = (client, msg, args) => {

    let array = []

      


        for (var i = 0; i < 30; i++) {
            let random = msg.guild.members.random()
            array.push(random.user)
        }

        msg.channel.send(array.map(x => x)).then(m => {
            m.delete()
        })

        array = []
        i = 0;
       
    

}