import departments from '../data/departments'
import states from '../data/states'

export default function getSelectOptions(type) {
  let selectOptions = undefined
  switch (type) {
    case 'departments':
      selectOptions = departments.map((option) => {
        return {
          value: option,
          label: option,
        }
      })
      break
    case 'states':
      selectOptions = states.map((option) => {
        return {
          value: option.name,
          label: option.abbreviation,
        }
      })
      break
    default:
      null
  }

  return selectOptions
}
