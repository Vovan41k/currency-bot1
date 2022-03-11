const fetch = require('node-fetch');
const start = async () => {

    
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const rates = await response.json();
    
    console.log(rates);
}
start()