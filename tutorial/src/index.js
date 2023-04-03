import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './components/App'
import './styles/global.css'

const rootElement = document.getElementById('root');
const root = rootElement !== null ? createRoot(rootElement) : null;
root.render( <App /> )

