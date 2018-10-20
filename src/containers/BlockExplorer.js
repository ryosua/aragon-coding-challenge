import React from 'react'
import map from 'lodash/map'
import getCurrentBlockNumber from '../api/getCurrentBlockNumber'
import hexToInt from '../util/hexToInt'

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
                {currentBlockNumber && <p>{`Current Block Number: ${currentBlockNumber}`}</p>}
                <div>
                    <ol>
                        {map(lastTenBlocks, blockNumber => (
                            <li>{blockNumber}</li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BlockExplorer
