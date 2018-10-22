import React, { Component } from 'react'
import './App.css'
import { AragonApp, AppView } from '@aragon/ui'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import BlockExplorer from 'containers/BlockExplorer'
import text from 'constants/text'

const client = new ApolloClient({
    uri: 'https://ethql-alpha.infura.io/graphql'
})

const { name } = text.app

class App extends Component {
    render() {
        return (
            <AragonApp className="app" publicUrl="/aragon-ui-assets/">
                <AppView title={name}>
                    <ApolloProvider client={client}>
                        <BlockExplorer />
                    </ApolloProvider>
                </AppView>
            </AragonApp>
        )
    }
}

export default App
