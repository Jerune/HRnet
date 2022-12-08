// // @ts-nocheck
// import React, { createContext, useState } from 'react'

// const Context = createContext({})

// const EmployeesContext = ({ children }) => {
//   const [employeeList, setEmployeeList] = useState(['test'])

//   function addEmployee(newEmployee) {
//     const isNewEmployee = !employeeList.filter(
//       (employee) => employee.lastName === newEmployee.lastName,
//     )
//     if (isNewEmployee) {
//       setEmployeeList((prevList) => {
//         return {
//           ...prevList,
//           newEmployee,
//         }
//       })
//     }
//   }

//   return (
//     <Context.Provider value={{ employeeList, addEmployee }}>
//       {children}
//     </Context.Provider>
//   )
// }

// export EmployeesContext
