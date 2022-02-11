require('dotenv').config()
const token = process.env.TOKEN
const TelegramBot = require('node-telegram-bot-api');
const {rurToUsd, usdToRur} = require('./lib/currency')

const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/rur (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const rubles = match[1]; // the captured "whatever"
  const dollars = rurToUsd(rubles)
  bot.sendMessage(chatId, dollars + '$');
});

bot.onText(/\/usd (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const dollars = match[1]; // the captured "whatever"
    const rubles = usdToRur(dollars)
    bot.sendMessage(chatId, rubles + 'Р');
  });

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });
