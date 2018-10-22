import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Block from './index.js'
import TransactionRow from 'components/TransactionRow'

describe('Block tests', () => {
    it('Block renders according to snapshot.', () => {
        const block = {
            number: 6551120,
            transactions: [
                {
                    hash: '0xd67348d36f906ba7b2be09baa868e0e93cf310f8d06146ec8e0936e96410e05d',
                    nonce: 97438,
                    index: 1,
                    from: {
                        address: '0xBA826fEc90CEFdf6706858E5FbaFcb27A290Fbe0'
                    },
                    to: {
                        address: '0xD0a4b8946Cb52f0661273bfbC6fD0E0C75Fc6433'
                    },
                    value: 0,
                    gasPrice: 56450000000,
                    gas: 152609,
                    inputData:
                        '0xa9059cbb00000000000000000000000020ec03ea0bc655d10399f7dce2f9cd1e691b8ea9000000000000000000000000000000000000000000006d493e59700229ed3c00',
                    status: 'SUCCESS',
                    block: {
                        hash: '0x482ef4f5d0931339f8b939d2a49d8ae8a226d4e2e2cd9c442550b89f8b8726ec'
                    }
                },
                {
                    hash: '0x24c810eaa67a6ec5e84c75ad6656a1e1af14b6d1dcf69990079dc78e336563f7',
                    nonce: 103,
                    index: 7,
                    from: {
                        address: '0x16C598eE4540b73898dEd6684e78774928cE2e88'
                    },
                    to: {
                        address: '0x7C39a481E17CCAfbe8e50Ec1388fDBB01Bbb3bf4'
                    },
                    value: 0,
                    gasPrice: 29593750000,
                    gas: 60000,
                    inputData:
                        '0xa9059cbb0000000000000000000000008b6fb96247bd209ac27ba3ba86fbfac441c6515d0000000000000000000000000000000000000000000000056bc75e2d63100000',
                    status: 'SUCCESS',
                    block: {
                        hash: '0x482ef4f5d0931339f8b939d2a49d8ae8a226d4e2e2cd9c442550b89f8b8726ec'
                    }
                }
            ]
        }
        const tree = renderer.create(<Block blockNumber={block.number} transactions={block.transactions} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('Block renders an empty message if it contains no transactions.', () => {
        const block = {
            number: 6551120,
            transactions: []
        }

        const wrapper = shallow(<Block blockNumber={block.number} transactions={block.transactions} />)
        expect(wrapper.exists('.empty-text')).toEqual(true)
    })

    it('Block renders all transactions', () => {
        const block = {
            number: 6551120,
            transactions: [
                {
                    hash: '0xd67348d36f906ba7b2be09baa868e0e93cf310f8d06146ec8e0936e96410e05d',
                    nonce: 97438,
                    index: 1,
                    from: {
                        address: '0xBA826fEc90CEFdf6706858E5FbaFcb27A290Fbe0'
                    },
                    to: {
                        address: '0xD0a4b8946Cb52f0661273bfbC6fD0E0C75Fc6433'
                    },
                    value: 0,
                    gasPrice: 56450000000,
                    gas: 152609,
                    inputData:
                        '0xa9059cbb00000000000000000000000020ec03ea0bc655d10399f7dce2f9cd1e691b8ea9000000000000000000000000000000000000000000006d493e59700229ed3c00',
                    status: 'SUCCESS',
                    block: {
                        hash: '0x482ef4f5d0931339f8b939d2a49d8ae8a226d4e2e2cd9c442550b89f8b8726ec'
                    }
                },
                {
                    hash: '0x24c810eaa67a6ec5e84c75ad6656a1e1af14b6d1dcf69990079dc78e336563f7',
                    nonce: 103,
                    index: 7,
                    from: {
                        address: '0x16C598eE4540b73898dEd6684e78774928cE2e88'
                    },
                    to: {
                        address: '0x7C39a481E17CCAfbe8e50Ec1388fDBB01Bbb3bf4'
                    },
                    value: 0,
                    gasPrice: 29593750000,
                    gas: 60000,
                    inputData:
                        '0xa9059cbb0000000000000000000000008b6fb96247bd209ac27ba3ba86fbfac441c6515d0000000000000000000000000000000000000000000000056bc75e2d63100000',
                    status: 'SUCCESS',
                    block: {
                        hash: '0x482ef4f5d0931339f8b939d2a49d8ae8a226d4e2e2cd9c442550b89f8b8726ec'
                    }
                }
            ]
        }

        const wrapper = shallow(<Block blockNumber={block.number} transactions={block.transactions} />)
        expect(wrapper.find(TransactionRow)).toHaveLength(block.transactions.length)
    })
})
