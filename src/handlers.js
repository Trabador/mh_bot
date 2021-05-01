const { buildMessage, commands, processCommands, prefix } = require('./utils')

const handleMessage = (message) => {
    if(message.author.bot) return
    if(message.content.startsWith(prefix)){
        const [command, ...args] = processCommands(message)
        command.toLowerCase()
        switch(command){
            case commands.HUNT:
                generateRandomWeapon(args, message)
                break
            default:
                message.channel.send('Commando no valido = (')
        }
    }
}

const generateRandomWeapon = (args, message) => {
    const response = buildMessage(args)
    message.channel.send(response)
}

module.exports = {
    handleMessage
}