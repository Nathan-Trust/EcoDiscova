import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './contexts/useContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ContextProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ContextProvider>
  </AuthContextProvider>
);
