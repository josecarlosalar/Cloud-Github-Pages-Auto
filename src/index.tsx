import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);