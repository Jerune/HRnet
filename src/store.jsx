// @ts-nocheck
import React, { createContext, useState } from 'react'

const Context = createContext({})

const EmployeesContext = ({ children }) => {
  const [employeeList, setEmployeeList] = useState([])

  function addEmployee(newEmployee) {
    console.log(newEmployee)
    const employeeWithSameLastName = employeeList.filter(
      (employee) => employee.lastName === newEmployee.lastName,
    )
    const isNewEmployee = employeeWithSameLastName.length === 0

    if (isNewEmployee) {
      setEmployeeList((prevList) => {
        return [...prevList, newEmployee]
      })
    }
  }

  return (
    <Context.Provider value={{ employeeList, addEmployee }}>
      {children}
    </Context.Provider>
  )
}

export { EmployeesContext, Context }
