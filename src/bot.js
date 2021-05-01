require('dotenv').config()
const { handleMessage } = require('./handlers')

const { Client } = require('discord.js')
const bot = new Client()

bot.once('ready', () => {
    console.log(`Bot is ready ${bot.user.tag}`)
})

bot.on('message', (message) => {
    handleMessage(message)
})

bot.login(process.env.BOT_TOKEN)