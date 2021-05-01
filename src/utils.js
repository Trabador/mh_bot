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

module.exports = {
    generateRandomNumber,
    processCommands,
    commands,
    prefix
}