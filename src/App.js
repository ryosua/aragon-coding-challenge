import React, { Component } from 'react'
import './App.css'
import BlockExplorer from './containers/BlockExplorer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header" />
                <BlockExplorer />
            </div>
        )
    }
}

export default App
