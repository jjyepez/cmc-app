export class GetAPIdata {
  constructor(){
    this.route = {
      callback : null,
      fallback : null,
      url      : '',
      cors     : 'cors',
      default  : {},
    }
  }
  fetch( iargs = false ){
    this.route = iargs || this.route
    const urlBase = 'http://cors-proxy.htmldriven.com/?url=';
    // --- NOESISHOSTING ---> 'https://noesishosting.com/sw/cors/?a=cors&url=';
    const urlCORS = this.route.cors ? urlBase : ''
    const url     = `${urlCORS}${this.route.url}`
    const options = {
      method: 'GET',
      mode  : this.route.cors ? 'cors' : 'no-cors',
      cache : 'default'
    }
    fetch( url )
    .then( rsp => rsp.json() )
    .then( rslt => {
      this.route.callback(rslt)
    })
    .catch( e => {
      this.route.fallback(e, this.route.default)
    })
  }
}
