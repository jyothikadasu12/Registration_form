
import React from 'react'
import { createRoot } from 'react-dom/client'
import RegistrationPage from './pages/RegistrationPage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegistrationPage />
  </React.StrictMode>
)
