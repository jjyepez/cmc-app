// --- React
import React, { Component } from 'react'
// --- recursos, data y otras fuentes
// --- contenedores y UI
import AppUI from '../ui/AppUI'
import data from '../../data/data.json'
import { DummyData } from '../../data/dummy-data'

class App extends Component {
  state = {
    data
  }
  componentWillMount = event => {
    const dummy = new DummyData('nombre,apellido,avatar,correo',10, this.fetchCallback,
    this.fetchFallback)
    dummy.fetch()
  }
  fetchFallback = e => {
    this.setState({
      data
    })
  console.log( 'Error', e )
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
        {...data}
        dataD = {this.state.data.rs}
      />
    )
  }
}

export default App
