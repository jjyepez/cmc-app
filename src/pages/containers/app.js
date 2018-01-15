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
    data: [],
    dataFav: [],
  }
  componentWillMount = event => {
    // const APIurl     = 'https://api.coinmarketcap.com/v1/global/'
    const APIurl     = 'https://api.coinmarketcap.com/v1/ticker/?limit=20'
    const APIurlFav  = 'https://api.coinmarketcap.com/v1/ticker/?limit=10'
    const useCORS    = false
    const infoGlobal = new GetAPIdata()
    const infoFav    = new GetAPIdata()
    infoGlobal.fetch({
      url     : APIurl,
      cors    : useCORS,
      callback: this.fetchCallback,
      fallback: this.fetchFallback
    }, false )

    infoFav.fetch({
      url     : APIurlFav,
      cors    : useCORS,
      callback: this.fetchCallbackFav,
      fallback: this.fetchFallback
    }, false )
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
  fetchCallbackFav = data => {
    this.setState({
      dataFav: data //formattedData()
    })
  }
  handleSetRef = element => {
    this.Lista = element
  }
  render() {
    return (
      <ErrorHandler>
        <AppUI
          data    = {this.state.data}
          dataFav = {this.state.dataFav}
        />
      </ErrorHandler>
    )
  }
}

export default App

// <InfoGlobal
//   data = {this.state.dataInfoGlobal}
// />
