import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './components/buttons/buttons.scss';
import './tools/styles.scss';
createRoot(document.getElementById('root')).render(<App />);
