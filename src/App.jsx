import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar';
import Video from './components/Video';
import Modal3D from './components/Modal3D';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <Navbar />
      <Video />
      <Modal3D />
    </>
  )
}

export default App
