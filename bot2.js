
require('dotenv').config()
const token = process.env.TOKEN
const TelegramBot = require('node-telegram-bot-api');
const {  convertTo, convertFrom, signs } = require('./lib/currency')

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/to (.+)/, (msg, match) => {
    const words = match[1].split(' ')
    const currency = words[0].toUpperCase()
    const count = words[1]
    const chatId = msg.chat.id;
    const res = convertTo(currency, count)
    bot.sendMessage(chatId, res + signs[currency]);
    console.log(chatId)
});

bot.onText(/\/from (.+)/, (msg, match) => {
    const words = match[1].split(' ')
    const currency = words[0].toUpperCase()
    const count = words[1]
    const chatId = msg.chat.id;
    const res = convertFrom(currency, count)
    bot.sendMessage(chatId, res + signs.RUR);
});
module.exports = bot