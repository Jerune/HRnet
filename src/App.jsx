import React from 'react'
import { Route, Routes } from 'react-router'

import CreateEmployee from './pages/CreateEmployee'
import EmployeeList from './pages/EmployeeList'

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<CreateEmployee />} />
        <Route path="employee-list" element={<EmployeeList />} />
      </Routes>
    </>
  )
}

export default App
