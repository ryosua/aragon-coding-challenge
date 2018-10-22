import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import text from 'constants/text'
import { Table, TableHeader, TableRow, Text } from '@aragon/ui'
import TransactionRow from 'components/TransactionRow'

const { blockNumber: blockNumberText, hash, from, to, value } = text.block

const Block = ({ blockNumber, transactions, emptyBlockText }) => (
    <>
        <Text size={'large'}>{`${blockNumberText} ${blockNumber}`}</Text> <br />
        {isEmpty(transactions) ? (
            <Text className="empty-text">{emptyBlockText}</Text>
        ) : (
            <Table
                header={
                    <TableRow>
                        <TableHeader title={hash} />
                        <TableHeader title={from} />
                        <TableHeader title={to} />
                        <TableHeader title={value} />
                    </TableRow>
                }>
                {map(transactions, transaction => (
                    <TransactionRow key={transaction.hash} {...transaction} />
                ))}
            </Table>
        )}
        <br />
    </>
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
