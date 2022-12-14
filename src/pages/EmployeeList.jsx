// @ts-nocheck
import React from 'react'
import DataTable from 'react-data-table-component'
import TitleHeader from '../components/TitleHeader'
import useSearch from '../hooks/useSearch'
import getTableColumns from '../utils/getTableColumns'

const columns = getTableColumns()

const EmployeeList = () => {
  const [SearchEmployees, filteredEmployees] = useSearch()

  return (
    <main className="main">
      <TitleHeader title="Employee List">
        <SearchEmployees />
      </TitleHeader>
      <DataTable
        columns={columns}
        data={filteredEmployees}
        pagination
        paginationPerPage={20}
      />
    </main>
  )
}

export default EmployeeList
