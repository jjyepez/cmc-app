import React, { Component } from 'react'
import RegularError from '../ui/regular-error'

class ErrorHandler extends Component {
  state = {
    errorCaught: false
  }
  componentDidCatch = (error, info) => {
    this.setState({
      errorCaught: true
    })
  }
  render() {
    if( this.state.errorCaught ) {
      return <RegularError />
    } else {
      return this.props.children
    }
  }
}

export default ErrorHandler
