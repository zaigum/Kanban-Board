// main.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming your App component is in a file named App.tsx

const root = (ReactDOM as any).createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
