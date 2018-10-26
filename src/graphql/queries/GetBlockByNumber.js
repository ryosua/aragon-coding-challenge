import gql from 'graphql-tag'

const GetBlockByNumber = gql`
    query GetBlock($number: BlockNumber!) {
        block(number: $number) {
            hash
            transactions {
                hash
                from {
                    address
                }
                to {
                    address
                }
                value
            }
        }
    }
`
export default GetBlockByNumber
