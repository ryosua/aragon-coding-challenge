import React from 'react'
import map from 'lodash/map'
import getCurrentBlockNumber from 'api/getCurrentBlockNumber'
import hexToInt from 'util/hexToInt'
import BlockContainer from 'containers/BlockContainer'
import { getConversionRate } from 'api/getConversionRate'
import RateContext from 'contexts/RateContext'

class BlockExplorer extends React.Component {
    state = {
        currentBlockNumber: undefined,
        lastTenBlocks: [],
        ethToUSDRate: undefined
    }

    logError = error => console.log(error)

    componentDidMount() {
        getCurrentBlockNumber()
            .then(response => {
                const currentBlockNumber = hexToInt(response.result)
                let lastTenBlocks = []
                for (let i = currentBlockNumber; i > currentBlockNumber - 10; i--) {
                    lastTenBlocks.push(i)
                }
                this.setState({ currentBlockNumber, lastTenBlocks })
            })
            .catch(this.logError)

        getConversionRate()
            .then(ethToUSDRate => {
                this.setState({ ethToUSDRate })
            })
            .catch(this.logError)
    }

    render() {
        const { lastTenBlocks, ethToUSDRate } = this.state
        return (
            <RateContext.Provider value={{ ethToUSDRate }}>
                {map(lastTenBlocks, blockNumber => (
                    <BlockContainer key={blockNumber} blockNumber={blockNumber} />
                ))}
            </RateContext.Provider>
        )
    }
}

export default BlockExplorer
