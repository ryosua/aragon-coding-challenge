import gql from 'graphql-tag'

const BlockFragment = gql`
    fragment BlockFragment on Block {
        hash
        transactions(filter: { withInput: true }) {
            hash
            value
            from {
                address
            }
            to {
                address
            }
        }
    }
`
export default BlockFragment
