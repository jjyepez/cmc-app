// --- React
import React, { Component } from 'react'
// --- recursos, data y otras fuentes
// --- contenedores y UI
import AppUI from '../ui/AppUI'
//import data from '../../data/data.json'
import { GetAPIdata } from '../../data/get-api-data'

class App extends Component {
  state = {
    data: {rslt:'empty'}
  }
  componentWillMount = event => {
    const APIurl     = 'https://api.coinmarketcap.com/v1/global/'
    const useCORS    = false
    const infoGlobal = new GetAPIdata()
    const options    = {
      url     : APIurl,
      cors    : useCORS,
      callback: this.fetchCallback,
      fallback: this.fetchFallback
    }
    infoGlobal.fetch( options )
  }
  fetchFallback = e => {
    this.setState({
      data
    })
  }
  fetchCallback = data => {
    this.setState({
      data
    })
  }
  handleSetRef = element => {
    this.Lista = element
  }
  render() {
    return (
      <AppUI
        {...this.state.data}
      />
    )
  }
}

export default App
