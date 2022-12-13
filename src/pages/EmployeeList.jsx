// @ts-nocheck
import React, { useContext, useState } from 'react'
import DataTable from 'react-data-table-component'
import { mockedEmployees } from '../data/mockedEmployees'
import { Context } from '../store'
import getTableColumns from '../utils/getTableColumns'

const columns = getTableColumns()

const EmployeeList = () => {
  const { employeeList } = useContext(Context)
  const [filteredEmployees, setFilteredEmployees] = useState(mockedEmployees)

  return (
    <>
      <DataTable columns={columns} data={filteredEmployees} pagination />
    </>
  )
}

export default EmployeeList
