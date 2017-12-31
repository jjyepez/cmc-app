// --- React
import React, { Component } from 'react'
import ons from 'onsenui'
// --- recursos, data y otras fuentes
// --- contenedores y UI
import AppUI        from '../ui/app-ui'
import InfoGlobal   from '../../fragments/containers/info-global'
import ErrorHandler from '../../widgets/containers/error-handler'
//import data from '../../data/data.json'
import { GetAPIdata } from '../../data/get-api-data'

class App extends Component {
  state = {
    data: [['rslt','empty']]
  }
  componentWillMount = event => {
    // const APIurl     = 'https://api.coinmarketcap.com/v1/global/'
    const APIurl     = 'https://api.coinmarketcap.com/v1/ticker/?limit=20'
    const useCORS    = false
    const infoGlobal = new GetAPIdata()
    const options    = {
      url     : APIurl,
      cors    : useCORS,
      callback: this.fetchCallback,
      fallback: this.fetchFallback
    }
    infoGlobal.fetch( options, false )
  }
  fetchFallback = e => {
    ons.notification.alert({message:`Error: ${e}`})
  }
  fetchCallback = data => {
    /*const formattedData = () => Object.keys( data ).map( (el, key) => {
      const dato = data[el]
      return (
          [el, dato]
        )
      }
    )*/
    this.setState({
      data: data //formattedData()
    })
  }
  handleSetRef = element => {
    this.Lista = element
  }
  render() {
    return (
      <ErrorHandler>
        <AppUI
          data = {this.state.data}
        >
          <InfoGlobal
            data = {this.state.dataInfoGlobal}
          />
        </AppUI>
      </ErrorHandler>
    )
  }
}

export default App
