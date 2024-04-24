import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Landing from './Pages/Landing'
import Newarrivals from './Pages/Newarrivals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

       <Landing/> 
       <Newarrivals/>

    </>
  )
}

export default App
