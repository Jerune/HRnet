// @ts-nocheck
import React from 'react'
import DataTable from 'react-data-table-component'
import useSearch from '../components/SearchEmployees'
import getTableColumns from '../utils/getTableColumns'

const columns = getTableColumns()

const EmployeeList = () => {
  const [SearchEmployees, filteredEmployees] = useSearch()

  return (
    <>
      <SearchEmployees />
      <DataTable columns={columns} data={filteredEmployees} pagination />
    </>
  )
}

export default EmployeeList
