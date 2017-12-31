export class GetAPIdata {
  /*constructor(){
    this.route = {
      callback : null,
      fallback : null,
      url      : '',
      cors     : 'cors',
      default  : {},
      initTime : 0,
      eta      : 0,
    }
  }*/
  fetch( iargs = false, showLog = true ){
    this.route = iargs || this.route
    const urlBase = 'https://noesishosting.com/sw/cors/?a=cors&url=' //'http://cors-proxy.htmldriven.com/?url='
    // --- NOESISHOSTING ---> 'https://noesishosting.com/sw/cors/?a=cors&url=';
    const urlCORS = this.route.cors ? urlBase : ''
    const url     = `${urlCORS}${this.route.url}`
    const options = {
      method: 'GET',
      mode  : this.route.cors ? 'cors' : 'no-cors',
      cache : 'default'
    }
    this.route.initTime = (new Date()).getTime()
    showLog && console.log('Iniciando Fetch: ', url)
    // showLog && console.log('initTime: ', this.route.initTime)
    fetch( url )
    .then( rsp => rsp.json() )
    .then( rslt => {
      this.route.eta = (new Date()).getTime() - this.route.initTime
      this.route.callback(rslt)
      showLog && console.log('Completado Fetch: ', rslt)
      showLog && console.log('ETA: ', this.route.eta+'ms')
    })
    .catch( e => {
      this.route.eta = (new Date()).getTime() - this.route.initTime
      this.route.fallback(e, this.route.default)
      showLog && console.log('Error en Fetch: ', e)
      showLog && console.log('ETA: ', this.route.eta+'ms')
    })
  }
}
