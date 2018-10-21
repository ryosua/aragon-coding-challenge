import React from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableCell, Text } from '@aragon/ui'
import { getConversionRate, convertWeiToUSD } from '../../api/getConversionRate'

class TransactionRow extends React.Component {
    state = {
        ethToUSDRate: undefined
    }

    componentDidMount() {
        getConversionRate().then(ethToUSDRate => {
            console.log(ethToUSDRate)
            this.setState({ ethToUSDRate })
        })
    }

    render() {
        const { hash, from, to, value } = this.props
        const { ethToUSDRate } = this.state
        const valueInUSD = ethToUSDRate ? convertWeiToUSD(value, ethToUSDRate) : 'loading'
        return (
            <TableRow>
                <TableCell>
                    <Text>{hash}</Text>
                </TableCell>
                <TableCell>
                    <Text>{from.address}</Text>
                </TableCell>
                <TableCell>
                    <Text>{to.address}</Text>
                </TableCell>
                <TableCell>
                    <Text>{valueInUSD}</Text>
                </TableCell>
            </TableRow>
        )
    }
}

TransactionRow.propTypes = {
    hash: PropTypes.string.isRequired,
    from: PropTypes.object.isRequired,
    to: PropTypes.object.isRequired,
    value: PropTypes.number.isRequired
}

export default TransactionRow
