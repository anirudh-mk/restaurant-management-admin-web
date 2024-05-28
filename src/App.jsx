import React from 'react'
import Sidebar from './components/Sidebar'
import Foods from './screens/Foods'
import LayoutScreen from './screens/LayoutScreen'
import { Route, Router, Routes } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/layout/*" element={<LayoutScreen />} />
      </Routes>
    </>
  )
}

export default App