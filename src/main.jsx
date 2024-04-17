import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import FirebaseProvider from './Components/FirebaseProvider/FirebaseProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </FirebaseProvider>
  </React.StrictMode>,
)
