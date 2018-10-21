import React, { Component } from 'react'
import './App.css'
import { AragonApp, AppView } from '@aragon/ui'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import BlockExplorer from 'containers/BlockExplorer'

const client = new ApolloClient({
    uri: 'https://ethql-alpha.infura.io/graphql'
})

class App extends Component {
    render() {
        return (
            <AragonApp className="app" publicUrl="/aragon-ui-assets/">
                <AppView title="Ten Latest Ethereum Blocks">
                    <ApolloProvider client={client}>
                        <BlockExplorer />
                    </ApolloProvider>
                </AppView>
            </AragonApp>
        )
    }
}

export default App
