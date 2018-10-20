import gql from 'graphql-tag'

const GetBlockByNumber = gql`
    query GetBlock($number: BlockNumber!) {
        block(number: $number) {
            hash
            transactions(filter: { withInput: true }) {
                index
                hash
                from {
                    address
                }
                to {
                    address
                }
                decoded {
                    entity
                    operation
                    standard
                    ... on ERC20Transfer {
                        tokenContract {
                            symbol
                        }
                        from {
                            account {
                                address
                            }
                            tokenBalance
                        }
                        to {
                            account {
                                address
                            }
                        }
                        value
                    }
                }
            }
        }
    }
`
export default GetBlockByNumber
