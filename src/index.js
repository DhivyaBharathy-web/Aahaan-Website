import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import App from './App';

const rootElement = document.getElementById('root'); // Get the root element
const root = createRoot(rootElement); // Create a root
root.render(<App />); // Render your app
