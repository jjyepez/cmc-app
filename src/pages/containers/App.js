// --- React
import React, { Component } from 'react'
// --- recursos, data y otras fuentes
// --- contenedores y UI
import AppUI from '../ui/AppUI'

class App extends Component {
  state = {
    app: {
      version: 'beta 0.1'
    }
  }
  componentWillMount = event => {
    document.querySelector('head title').textContent = this.state.app.version
  }
  handleSetRef = element => {
    this.App = element
  }
  render() {
    return (
      <AppUI
        handleSetRef = {this.handleSetRef}
      />
    )
  }
}

export default App
