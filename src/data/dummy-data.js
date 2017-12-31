import React from 'react'
import dataDefault from './data.json'

export class DummyData {
  constructor( fields='lorem' , n=1, fetchCallback=()=>{}, fetchFallback=()=>{} ){
    this.fetchCallback = fetchCallback
    this.fetchFallback = fetchFallback
    this.fields = fields
    this.n = n
  }
  fetch(){
    const options = {
      method: 'GET',
      mode  : 'no-cors',
      cache : 'default'
    }
    const urlBase = 'https://noesishosting.com/sw';
    const urlCORS = ''
    //const urlCORS = `${urlBase}/cors/?a=cors&url=`
    const url     = `${urlCORS}${urlBase}/loremdata/?a=rs&p=${this.fields}:${this.n}`

    fetch( url )
    .then( rsp => rsp.json() )
    .then( rslt => {
      const rs = rslt
      this.fetchCallback(rs)
    })
    .catch( e => {
console.log( dataDefault)
      this.fetchFallback(e, dataDefault)
    })
  }
}
