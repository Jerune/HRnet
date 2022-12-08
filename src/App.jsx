import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
// import { ContextProvider } from './store'

import NotFound from './pages/404'
import CreateEmployee from './pages/CreateEmployee'
import EmployeeList from './pages/EmployeeList'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<CreateEmployee />} />
        <Route path="employee-list" element={<EmployeeList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
