const WEI_PER_ETHER = 1000000000000000000

const getConversionRate = () => {
    return fetch('https://api.coinbase.com/v2/exchange-rates')
        .then(response => response.json())
        .then(response => Number(response.data.rates.ETH))
        .catch(error => Promise.reject(error))
}

const convertWeiToUSD = (weiValue, ethToUSDConversionRate) =>
    `$${(weiValue / (ethToUSDConversionRate * WEI_PER_ETHER)).toFixed(2)}`

export { getConversionRate, convertWeiToUSD }
