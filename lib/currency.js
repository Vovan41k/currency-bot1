const rates = {
    usd: 75,
    eur: 85,
}

const rurToUsd = (rubles) => {
    return Math.floor(rubles * 100 / 75) / 100
}

const usdToRur = (dollars) => {
    return dollars * 75
}
const convertTo = (currency, rubles) => {
    return Math.floor(rubles * 100 / rates[currency]) / 100

}
const convertFrom = (currency, count) => {
    //todo
}

module.exports = {
    rurToUsd: rurToUsd,
    usdToRur: usdToRur,
    convertTo: convertTo,
    convertFrom: convertFrom,
}