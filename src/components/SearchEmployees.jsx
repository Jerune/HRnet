// @ts-nocheck
import React, { useContext, useEffect, useRef, useState } from 'react'
import { mockedEmployees } from '../data/mockedEmployees'
import { Context } from '../store'

const useSearch = () => {
  const { employeeList } = useContext(Context)
  const [searchFormData, setSearchFormData] = useState('')
  const [filteredEmployees, setFilteredEmployees] = useState(mockedEmployees)
  const inputField = useRef(null)

  useEffect(() => {
    async function setFilters() {
      await filterEmployees()
      inputField.current.focus()
    }

    setFilters()
  }, [searchFormData])

  function handleChange(searchTerm) {
    setSearchFormData(searchTerm.toLowerCase())
  }

  function filterEmployees() {
    const filteredData = mockedEmployees.filter((employee) =>
      employee.lastName.toLowerCase().includes(searchFormData),
    )

    setFilteredEmployees(filteredData)
  }

  const SearchEmployee = () => {
    return (
      <div>
        <label htmlFor="search">Search</label>
        <input
          ref={inputField}
          type="text"
          id="search"
          name="search"
          onChange={(event) => handleChange(event.target.value)}
          value={searchFormData}
          placeholder="Last name"
        />
      </div>
    )
  }

  return [SearchEmployee, filteredEmployees]
}

export default useSearch
