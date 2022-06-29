import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import MainApp from './mainApp'

function App () {
  return (
    <>
      <HashRouter >
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/:projectName" element={<MainApp />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
