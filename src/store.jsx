// @ts-nocheck
import React, { createContext, useState } from 'react'
import getCurrentDayAsString from './utils/getCurrentDay'

const Context = createContext({
  employeeList: [],
  checkIfEmployeeAlreadyExists: () => {},
  addEmployee: () => {},
})

const EmployeesContext = ({ children }) => {
  const [employeeList, setEmployeeList] = useState([])

  function checkIfEmployeeAlreadyExists(newEmployee) {
    const employeeWithSameLastName = employeeList.filter(
      (employee) => employee.lastName === newEmployee.lastName,
    )
    const isNewEmployee = employeeWithSameLastName.length === 0

    return isNewEmployee
  }

  function addEmployee({ startDate, dateOfBirth, ...newEmployee }) {
    newEmployee.startDate = getCurrentDayAsString(startDate)
    newEmployee.dateOfBirth = getCurrentDayAsString(dateOfBirth)
    setEmployeeList((prevList) => {
      return [...prevList, newEmployee]
    })
  }

  return (
    <Context.Provider
      value={{ employeeList, checkIfEmployeeAlreadyExists, addEmployee }}
    >
      {children}
    </Context.Provider>
  )
}

export { EmployeesContext, Context }
