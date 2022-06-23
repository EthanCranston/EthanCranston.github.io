import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainApp from './mainApp'

function App () {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/:projectName" element={<MainApp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
