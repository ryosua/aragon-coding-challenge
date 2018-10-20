import React from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableCell, Text } from '@aragon/ui'

const TransactionRow = ({ hash, from, to, value }) => (
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
            <Text>{value}</Text>
        </TableCell>
    </TableRow>
)

TransactionRow.propTypes = {
    hash: PropTypes.string.isRequired,
    from: PropTypes.object.isRequired,
    to: PropTypes.object.isRequired,
    value: PropTypes.number.isRequired
}

export default TransactionRow
