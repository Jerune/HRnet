import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import getCurrentDay from '../utils/getCurrentDay'
import getSelectOptions from '../utils/getSelectOptions'

const emptyForm = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  address: {
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  department: '',
}

const departments = [
  'Sales',
  'Marketing',
  'Engineering',
  'Human Resources',
  'Legal',
]

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const addressFields = ['street', 'city', 'state', 'zipCode']

const CreateEmployee = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(emptyForm)

  function handleChange(event) {
    const isAddressField = addressFields.includes(event.target.name)

    // @ts-ignore
    setFormData((prevFormData) => {
      if (!isAddressField) {
        return {
          ...prevFormData,
          [event.target.name]: event.target.value,
        }
      } else if (isAddressField) {
        return {
          ...prevFormData,
          address: {
            ...prevFormData.address,
            [event.target.name]: event.target.value,
          },
        }
      }
    })
  }

  console.log(formData)

  return (
    <main className="main">
      <h2>Create Employee</h2>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
          required
        />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          onChange={handleChange}
          value={formData.dateOfBirth}
          placeholder="dd/mm/yyyy"
          min={getCurrentDay().min}
          max={getCurrentDay().max}
          required
        />

        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          onChange={handleChange}
          value={formData.startDate}
          placeholder="dd/mm/yyyy"
          min={getCurrentDay().max}
          required
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            name="street"
            onChange={handleChange}
            value={formData.address.street}
            required
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleChange}
            value={formData.address.city}
            required
          />

          <label htmlFor="state">State</label>
          <select
            name="state"
            id="state"
            onChange={handleChange}
            value={formData.address.state}
            required
          >
            <option value="">-- Select State --</option>
            {getSelectOptions(states)}
          </select>

          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="number"
            id="zipCode"
            name="zipCode"
            onChange={handleChange}
            value={formData.address.zipCode}
            required
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select
          name="department"
          id="department"
          onChange={handleChange}
          value={formData.department}
          required
        >
          <option value="">-- Select Dept.--</option>
          {getSelectOptions(departments)}
        </select>
      </form>

      <button type="submit">Save</button>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </main>
  )
}

export default CreateEmployee
