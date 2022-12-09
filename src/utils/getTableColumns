import { employeeTableData } from '../data/employeeData'

export default function getTableColumns() {
  const tableColumns = employeeTableData.map((entry) => {
    const entrySplitArray = entry.split(/(?=[A-Z])/)
    const columnName = entrySplitArray
      .map((word) => word.toUpperCase())
      .join(' ')
    return {
      name: columnName,
      selector: (row) => row[entry],
      sortable: true,
    }
  })

  return tableColumns
}
