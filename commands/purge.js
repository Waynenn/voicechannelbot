module.exports = (client, msg, args) => {

    let channel = msg.channel;

    channel.fetchMessages( { limit: 100 }).then(m => {

        let filtered = m.filter(obj => obj.author.id == msg.author.id)
       
       
        filtered.forEach(m =>  {
            m.delete().catch(console.error)
        })
   
        
   
       
    })

    

}