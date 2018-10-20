import gql from 'graphql-tag'
import BlockFragment from '../fragments/BlockFragment'

const GetBlockByNumber = gql`
    query GetLast10Blocks($numbers: [BlockNumber]!) {
        blocks(numbers: $numbers) {
            ...BlockFragment
        }
    }
    ${BlockFragment}
`
export default GetBlockByNumber
