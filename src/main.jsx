import React from 'react';
import ReactDOM from 'react-dom/client';
import { init, backButton } from '@telegram-apps/sdk-react';

import App from './App';
import { BackButton } from './utils/BackButton';

init();

backButton.mount();

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BackButton />
    <App />
  </>
);
