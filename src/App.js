import React, { Component } from 'react'
import './App.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import BlockExplorer from './containers/BlockExplorer'

const client = new ApolloClient({
    uri: 'https://ethql-alpha.infura.io/graphql'
})

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header" />
                <ApolloProvider client={client}>
                    <BlockExplorer />
                </ApolloProvider>
            </div>
        )
    }
}

export default App
