import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddDonour from './components/AddDonour'
import ViewDonour from './components/ViewDonour'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddDonour/>
      <ViewDonour/>
    </>
  )
}

export default App
