// @ts-nocheck
import React from 'react'
import DataTable from 'react-data-table-component'
import useSearch from '../hooks/useSearch'
import getTableColumns from '../utils/getTableColumns'

const columns = getTableColumns()

const EmployeeList = () => {
  const [SearchEmployees, filteredEmployees] = useSearch()

  return (
    <>
      <div className="employee-list-header">
        <h1 className="title">Employee List</h1>
        <SearchEmployees />
      </div>
      <DataTable
        columns={columns}
        data={filteredEmployees}
        pagination
        paginationPerPage={20}
      />
    </>
  )
}

export default EmployeeList
