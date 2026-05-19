import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyApp from './MyApp.jsx'
import Comp1 from '../Comp1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <MyApp/> */}
    <Comp1/>
  </StrictMode>,
)