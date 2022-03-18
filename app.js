const express = require('express')
const bot = require('./bot2')
const {  convertTo, convertFrom, signs } = require('./lib/currency')
const app = express()
const PORT = 3000
app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/to/:currency/:count', (req, res) => {
    const currency = req.params.currency.toUpperCase()
    const count = req.params.count
    const result = convertTo(currency, count) 
    res.send(result + (signs[currency] || currency));
})
app.get('/from/:currency/:count',(req, res) => {
    const currency = req.params.currency.toUpperCase()
    const count = req.params.count
    const result = convertFrom(currency, count)
    res.send(result + signs.RUR)
})
app.post('/chat/:chatId/send', (req, res) => {
    const chatId = req.params.chatId
    bot.sendMessage(chatId, req.body.text)  
    res.send('okay')
})
app.listen(PORT, ()  => {
    console.log(`server started on http://localhost:${PORT}`)
})

