import React from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableCell, Text } from '@aragon/ui'
import { convertWeiToUSD } from 'api/getConversionRate'
import RateContext from 'contexts/RateContext'

const TransactionRow = ({ hash, from, to, value }) => {
    return (
        <RateContext.Consumer>
            {({ ethToUSDRate }) => {
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
            }}
        </RateContext.Consumer>
    )
}

TransactionRow.propTypes = {
    hash: PropTypes.string.isRequired,
    from: PropTypes.object.isRequired,
    to: PropTypes.object.isRequired,
    value: PropTypes.number.isRequired
}

export default TransactionRow
