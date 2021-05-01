const weapons = require('./weapons')
const { generateRandomNumber, commands, processCommands, prefix } = require('./utils')


const handleMessage = (message) => {
    if(message.author.bot) return
    if(message.content.startsWith(prefix)){
        const [command, ...args] = processCommands(message)
        command.toLowerCase()
        if(command === commands.HUNT){
            generateRandomWeapon(args, message)
        }
    }
}

const generateRandomWeapon = (args, message) => {
    let players = 1
    console.log(args)
    console.log(args.length)
    if(args.length === 0) {
        args.push(4) 
    }
    try{
        players = parseInt(args[0])
        if(players > 4) players = 4
        if(players < 0) players = 4
        for(let i=1; i<=players; i++){
            const number = generateRandomNumber()
            const response = `Jugador ${i} le toco usar ${weapons[number]}`
            console.log(response)
            message.channel.send(response)
        }
    }catch{
        console.log('not a number')
        message.channel.send('El comando hunt necesita un numero de jugadores entre 1 y 4. Ej, !hunt 3')
    }
}



module.exports = {
    handleMessage
}