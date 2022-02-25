const rates = {
    USD: 75,
    EUR: 85,
}

const signs = {
    USD: "$",
    EUR: "€",
    RUR: "₽"
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