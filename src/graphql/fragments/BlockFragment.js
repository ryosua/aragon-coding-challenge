import gql from 'graphql-tag'

const BlockFragment = gql`
    fragment BlockFragment on Block {
        hash
        transactions(filter: { withInput: true }) {
            hash
            nonce
            index
            from {
                address
            }
            to {
                address
            }
            value
            gasPrice
            gas
            inputData
            status
            block {
                hash
            }
        }
    }
`
export default BlockFragment
