// const dataRates = require("../data/rates.json")
const fetch = require('node-fetch');
const requestCurrencies = async () => {

    
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const dataRates = await response.json();
    
    for (let currency in dataRates.Valute){
        rates[currency] = dataRates.Valute[currency].Value
    }
    //  rates = {
    //     USD: dataRates.Valute.USD.Value,
    //     EUR: dataRates.Valute.EUR.Value,
    //     JPY: dataRates.Valute.JPY.Value,
    //     BYN: dataRates.Valute.BYN.Value,
    //     KZT: dataRates.Valute.KZT.Value,
    // }
    
}
requestCurrencies()
let rates = {}

const signs = {
    USD: "$",
    EUR: "€",
    RUR: "₽",
    JPY: "¥",
    BYN: "Br",
    KZT: "₸",
}
// const rurToUsd = (rubles) => {
//     return Math.floor(rubles * 100 / 75) / 100
// }

// const usdToRur = (dollars) => {
//     return dollars * 75
// }
const convertTo = (currency, rubles) => {
    return Math.floor(rubles * 100 / rates[currency]) / 100

}
const convertFrom = (currency, count) => {
    return rates[currency] * count
}

module.exports = {
    // rurToUsd: rurToUsd,
    // usdToRur: usdToRur,
    convertTo: convertTo,
    convertFrom: convertFrom,
    signs: signs
}