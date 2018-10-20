import React from 'react'
import map from 'lodash/map'
import getCurrentBlockNumber from '../api/getCurrentBlockNumber'
import hexToInt from '../util/hexToInt'
import BlockContainer from '../containers/BlockContainer'

class BlockExplorer extends React.Component {
    state = {
        currentBlockNumber: undefined,
        lastTenBlocks: []
    }

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
            .catch(error => console.log)
    }

    render() {
        const { currentBlockNumber, lastTenBlocks } = this.state
        return (
            <div>
                <div>
                    <ol>
                        {map(lastTenBlocks, blockNumber => (
                            <BlockContainer key={blockNumber} blockNumber={blockNumber} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BlockExplorer
