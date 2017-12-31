// --- React
import React    from 'react';
import ReactDOM from 'react-dom';
// --- misc
import registerServiceWorker from '../js/registerServiceWorker';
// --- containers y components
import App from '../pages/containers/app';

const $app = document.getElementById('app')

ReactDOM.render( <App />, $app );

registerServiceWorker();
