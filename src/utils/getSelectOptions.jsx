import React from 'react'

export default function getSelectOptions(optionsArray) {
  let selectOptions = undefined
  const arrayHasASingleValue = typeof optionsArray[0] === 'string'

  if (arrayHasASingleValue) {
    selectOptions = optionsArray.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))
  } else {
    selectOptions = optionsArray.map((option, index) => (
      <option key={index} value={option.name}>
        {option.abbreviation}
      </option>
    ))
  }

  return selectOptions
}
