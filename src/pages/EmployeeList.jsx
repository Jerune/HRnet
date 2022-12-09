// @ts-nocheck
import React, { useContext } from 'react'
import DataTable from 'react-data-table-component'
import { Context } from '../store'
import getTableColumns from '../utils/getTableColumns'

const columns = getTableColumns()

const EmployeeList = () => {
  const { employeeList } = useContext(Context)

  return <DataTable columns={columns} data={employeeList} />
}

export default EmployeeList
