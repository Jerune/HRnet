// @ts-nocheck
import React, { useContext, useEffect, useRef, useState } from 'react'
import { mockedEmployees } from '../data/mockedEmployees'
import { Context } from '../store'

const useSearch = () => {
  const { employeeList } = useContext(Context)
  const [searchFormData, setSearchFormData] = useState('')
  const [filteredEmployees, setFilteredEmployees] = useState(employeeList)
  const inputField = useRef(null)
  const employeeMock = mockedEmployees

  useEffect(() => {
    inputField.current.focus()
  }, [filteredEmployees])

  useEffect(() => {
    filterEmployees()
  }, [searchFormData])

  function handleChange(searchTerm) {
    setSearchFormData(searchTerm.toLowerCase())
  }

  function filterEmployees() {
    const filteredData = employeeList.filter((employee) =>
      employee.lastName.toLowerCase().includes(searchFormData),
    )

    setFilteredEmployees(filteredData)
  }

  const SearchEmployee = () => {
    return (
      <div className="search">
        <label htmlFor="search">Search</label>
        <input
          ref={inputField}
          type="text"
          id="search"
          name="search"
          onChange={(event) => handleChange(event.target.value)}
          value={searchFormData}
          placeholder="on last name"
        />
      </div>
    )
  }

  return [SearchEmployee, filteredEmployees]
}

export default useSearch
