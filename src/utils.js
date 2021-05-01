const weapons = require('./weapons')

const prefix = '!'

const generateRandomNumber = () => {
    return (Math.floor(Math.random() * 14))
}

const processCommands = (message) => {
    return message.content
        .trim()
        .substring(1)
        .split(/\s+/)
}

const commands = {
    HUNT: 'hunt'
}

const buildMessage = (args) => {
    let players = 1
    let response = ''
    console.log(args)
    if(args.length === 0) {
        args.push(4) 
    }
    players = parseInt(args[0])
    console.log(players)
    if(!isNaN(players)){
        if(players > 4) players = 4
        if(players < 0) players = 4
        for(let i=1; i<=players; i++){
            const number = generateRandomNumber()
            response += `Jugador ${i} le toco usar ${weapons[number]}\n`
            console.log(response)
        }
    }else{
        response = 'El comando hunt necesita un numero de jugadores entre 1 y 4. Ej, !hunt 3'
    }
    return response 
}

module.exports = {
    generateRandomNumber,
    processCommands,
    commands,
    prefix,
    buildMessage
}