import gql from 'graphql-tag'

const GetBlockByNumber = gql`
    query GetBlock($number: BlockNumber!) {
        block(number: $number) {
            hash
            transactionCount
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
    }
`
export default GetBlockByNumber
