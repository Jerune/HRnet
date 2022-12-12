// @ts-nocheck
import React, { useContext } from 'react'
import DataTable from 'react-data-table-component'
import { Context } from '../store'
import getTableColumns from '../utils/getTableColumns'

const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
)
const columns = getTableColumns()

const EmployeeList = () => {
  const { employeeList } = useContext(Context)

  return <DataTable columns={columns} data={employeeList} pagination />
}

export default EmployeeList
