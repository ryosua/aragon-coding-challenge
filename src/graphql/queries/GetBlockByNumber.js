import gql from 'graphql-tag'
import BlockFragment from '../fragments/BlockFragment'

const GetBlockByNumber = gql`
    query GetBlock($number: BlockNumber!) {
        block(number: $number) {
            ...BlockFragment
        }
    }
    ${BlockFragment}
`
export default GetBlockByNumber
