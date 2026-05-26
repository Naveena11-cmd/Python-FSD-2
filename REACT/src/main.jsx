import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyApp from './MyApp.jsx'
import Comp1 from '../Comp1.jsx'
import Task from '../Task.jsx'
import Map from '../Map.jsx'
import Parent from '../Parent.jsx'
import PL from '../ProductList.jsx'
import Events from '../Events.jsx'
import Events1 from '../Events1.jsx'
// import My from './Routing/My.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp />
    {/* <Map />
    <Parent />
    <PL />
    <Events />
    <Events1/> */}
    {/* <Comp1/> */}
    {/* <Task/> */}
    {/* <My/> */}
  </StrictMode>,
)