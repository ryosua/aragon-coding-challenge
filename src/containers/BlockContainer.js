import React from 'react'
import PropTypes from 'prop-types'
import filter from 'lodash/filter'
import { Query } from 'react-apollo'
import { Text } from '@aragon/ui'
import GetBlockByNumber from 'graphql/queries/GetBlockByNumber'
import Block from 'components/Block'

const BlockContainer = ({ blockNumber }) => (
    <Query query={GetBlockByNumber} variables={{ number: blockNumber }}>
        {({ loading, error, data }) => {
            if (loading) {
                return null
            }
            if (error) {
                return <Text>There was an error loading this block, please try refreshing the page.</Text>
            }
            const { transactions } = data.block
            const transactionsWithNonZeroValue = filter(transactions, transaction => transaction.value !== 0)
            return (
                <Block
                    blockNumber={blockNumber}
                    transactions={transactionsWithNonZeroValue}
                    emptyBlockText="This block contains no transactions sending Ether."
                />
            )
        }}
    </Query>
)

BlockContainer.propTypes = {
    blockNumber: PropTypes.number.isRequired
}

export default BlockContainer
