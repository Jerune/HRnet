// @ts-nocheck
import Modal from 'adaptable-react-modal/dist/Modal'
import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import departments from '../data/departments'
import states from '../data/states'
import { Context } from '../store'
import getCurrentDay from '../utils/getCurrentDay'
import getSelectOptions from '../utils/getSelectOptions'

const initialData = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  department: 'Sales',
  street: '',
  city: '',
  state: 'Alabama',
  zipCode: '',
}

const CreateEmployee = () => {
  const navigate = useNavigate()
  const errorfield = useRef(null)
  const { checkIfEmployeeAlreadyExists, addEmployee, employeeList } =
    useContext(Context)
  const [formData, setFormData] = useState(initialData)
  const [modalIsActive, setModalIsActive] = useState(false)

  function handleErrorMessage(action) {
    const errorIsShowing = errorfield.current.classList.contains('visible')
    console.log(action, errorIsShowing)
    switch (action) {
      case 'remove':
        errorIsShowing && errorfield.current.classList.remove('visible')
        break
      case 'set':
        !errorIsShowing && errorfield.current.classList.add('visible')
        break
      default:
        null
    }
  }

  function handleChange(event) {
    handleErrorMessage('remove')
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      }
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const isNewEmployee = await checkIfEmployeeAlreadyExists(formData)
    if (isNewEmployee) {
      await addEmployee(formData)
      setFormData(initialData)
      setModalIsActive(true)
    } else if (!isNewEmployee) {
      handleErrorMessage('set')
    }
  }

  return (
    <main className="main">
      <h2 className="title">Create Employee</h2>
      <form className="form" onSubmit={handleSubmit}>
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

        <fieldset>
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
        <button className="button" type="submit">
          Save
        </button>
        <span className="error" ref={errorfield}>
          Employee already exists, please verify the employee list
        </span>
      </form>
      {modalIsActive && (
        <Modal
          title="Employee Added"
          text="Great news!"
          animation={true}
          duration={2000}
          customFunction={() => navigate('/employee-list')}
          customClass="custom"
        />
      )}
    </main>
  )
}

export default CreateEmployee
