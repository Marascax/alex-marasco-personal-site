import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { AppContextWrapper } from './lib/appContext';
import { disableScroll } from './lib/scroll';

import './index.scss';

const rootElem = document.getElementById('root');
rootElem.style.width = '100%';
rootElem.style.height = '100%';

const root = ReactDOM.createRoot(rootElem);

disableScroll();

root.render(
  <React.StrictMode>
    <AppContextWrapper>
        <App />
    </AppContextWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
