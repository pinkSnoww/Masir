import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from '../app/page.js'; // Adjust the import based on your structure

// Replace ReactDOM.render with createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // Render the App component
