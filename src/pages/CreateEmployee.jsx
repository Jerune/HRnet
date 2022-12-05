// @ts-nocheck
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Modal from '../components/Modal'
import departments from '../data/departments'
import states from '../data/states'
import getCurrentDay from '../utils/getCurrentDay'
import getSelectOptions from '../utils/getSelectOptions'

const emptyForm = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  department: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
}

const CreateEmployee = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(emptyForm)
  const [modalIsActive, setModalIsActive] = useState(false)

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
    setModalIsActive(true)
    setTimeout(() => navigate('/employee-list'), 3000)
  }

  return (
    <main className="main">
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
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
          pattern="\d{1,2}/\d{1,2}/\d{4}"
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
          pattern="\d{1,2}/\d{1,2}/\d{4}"
          required
        />

        <fieldset className="address-section">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            name="street"
            onChange={handleChange}
            value={formData.street}
            required
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleChange}
            value={formData.city}
            required
          />

          <label htmlFor="state">State</label>
          <select
            name="state"
            id="state"
            onChange={handleChange}
            value={formData.state}
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
            value={formData.zipCode}
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
        <button type="submit">Save</button>
      </form>
      {modalIsActive && <Modal />}
    </main>
  )
}

export default CreateEmployee
