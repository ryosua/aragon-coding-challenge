import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import { Table, TableHeader, TableRow, Text } from '@aragon/ui'
import TransactionRow from 'components/TransactionRow'

const Block = ({ blockNumber, transactions, emptyBlockText }) => (
    <React.Fragment>
        <Text size={'large'}>Block Number: {blockNumber}</Text> <br />
        {isEmpty(transactions) ? (
            <Text>{emptyBlockText}</Text>
        ) : (
            <Table
                header={
                    <TableRow>
                        <TableHeader title="TxHash" />
                        <TableHeader title="From" />
                        <TableHeader title="To" />
                        <TableHeader title="Value" />
                    </TableRow>
                }>
                {map(transactions, transaction => (
                    <TransactionRow key={transaction.hash} {...transaction} />
                ))}
            </Table>
        )}
        <br />
    </React.Fragment>
)

Block.propTypes = {
    blockNumber: PropTypes.number.isRequired,
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            hash: PropTypes.string.isRequired,
            from: PropTypes.object.isRequired,
            to: PropTypes.object.isRequired,
            value: PropTypes.number.isRequired
        })
    ).isRequired,
    emptyBlockText: PropTypes.string.isRequired
}

export default Block
