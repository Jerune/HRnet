import React from 'react'

export default function getSelectOptions(optionsArray) {
  const selectOptions = optionsArray.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ))

  return selectOptions
}
