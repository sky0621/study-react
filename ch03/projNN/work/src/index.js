import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SClock from './sclock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SClock />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
