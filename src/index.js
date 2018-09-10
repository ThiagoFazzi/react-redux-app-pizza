import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Routers} from 'react-router-dom'

ReactDOM.render(
    <Routers basename={'/react-redux-app-pizza'}>
        <App />
    </Routers>
    , document.getElementById('root'));
registerServiceWorker();
