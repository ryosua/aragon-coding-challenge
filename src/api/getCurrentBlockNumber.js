const getCurrentBlockNumber = () =>
    fetch('https://api.infura.io/v1/jsonrpc/mainnet/eth_blockNumber').then(response => response.json())

export default getCurrentBlockNumber
