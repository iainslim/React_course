import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Puts the main App component in the 'root' dov of index.html
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById('root')
);