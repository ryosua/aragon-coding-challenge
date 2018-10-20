import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import filter from 'lodash/filter'
import { Query } from 'react-apollo'
import { Table, TableHeader, TableRow, TableCell, Text } from '@aragon/ui'
import GetBlockByNumber from '../graphql/queries/GetBlockByNumber'

const BlockContainer = ({ blockNumber }) => (
    <Query query={GetBlockByNumber} variables={{ number: blockNumber }}>
        {({ loading, error, data }) => {
            if (loading) {
                return null
            }
            if (error) {
                return <Text>Error :(</Text>
            }
            const { hash, transactions } = data.block
            const transactionsWithNonZeroValue = filter(transactions, transaction => transaction.value !== 0)
            return (
                <React.Fragment>
                    <Text size={'large'}>Block Number: {blockNumber}</Text> <br />
                    {isEmpty(transactionsWithNonZeroValue) ? (
                        <Text>This block contains no transactions sending Ether</Text>
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
                            {map(transactionsWithNonZeroValue, transaction => {
                                const { hash, from, to, value } = transaction
                                return (
                                    <TableRow key={hash}>
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
                            })}
                        </Table>
                    )}
                    <br />
                </React.Fragment>
            )
        }}
    </Query>
)

BlockContainer.propTypes = {
    blockNumber: PropTypes.number.isRequired
}

export default BlockContainer
