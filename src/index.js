import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

WebFontLoader.load({
  google: {
    families: ['Montserrat:400,600,700'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
