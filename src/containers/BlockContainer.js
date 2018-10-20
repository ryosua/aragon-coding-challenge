import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import GetBlockByNumber from '../graphql/GetBlockByNumber'

const BlockContainer = ({ blockNumber }) => (
    <Query query={GetBlockByNumber} variables={{ number: blockNumber }}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>
            console.log(JSON.stringify(data))
            return <li>{blockNumber}</li>
        }}
    </Query>
)

BlockContainer.propTypes = {
    number: PropTypes.number.isRequired
}

export default BlockContainer
