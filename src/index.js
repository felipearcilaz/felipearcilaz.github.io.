import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();  // serviceWorker.unregister();
         // If you want your app to work offline and load faster, you can change
        // unregister() to register() . Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA


