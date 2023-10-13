import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import GeneralForm from './components/GeneralForm'
import PortalForm from './components/PortalForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Formik Lessons</h1>
      <Routes>
          <Route path='/' element={<GeneralForm />}/>
          <Route path='/portal' element={<PortalForm />}/>
      </Routes>
    </>
  )
}

export default App
