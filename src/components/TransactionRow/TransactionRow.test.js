import React from 'react'
import renderer from 'react-test-renderer'
import TransactionRow from './index.js'

it('TransactionRow renders according to snapshot.', () => {
    const transaction = {
        hash: '0xd67348d36f906ba7b2be09baa868e0e93cf310f8d06146ec8e0936e96410e05d',

        from: {
            address: '0xBA826fEc90CEFdf6706858E5FbaFcb27A290Fbe0'
        },
        to: {
            address: '0xD0a4b8946Cb52f0661273bfbC6fD0E0C75Fc6433'
        },
        value: 0
    }

    const tree = renderer.create(<TransactionRow {...transaction} />).toJSON()
    expect(tree).toMatchSnapshot()
})
