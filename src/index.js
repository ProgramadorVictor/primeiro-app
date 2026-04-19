import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Chama este código primeiro index.js, pós isso chama dentro destre código o App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
