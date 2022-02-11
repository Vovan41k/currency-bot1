const rurToUsd = (rubles)=>{
return Math.floor(rubles*100/75)/100
}

const usdToRur = (dollars)=>{
    return dollars*75
}
module.exports = {
    rurToUsd: rurToUsd,
    usdToRur: usdToRur,
}