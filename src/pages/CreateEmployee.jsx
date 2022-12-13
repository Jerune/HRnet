// @ts-nocheck
import Modal from 'adaptable-react-modal/dist/Modal'
import React, { useContext, useRef, useState } from 'react'
import DatePicker from 'react-date-picker/dist/entry.nostyle'
import { useNavigate } from 'react-router'
import '../css/datepicker.css'
import departments from '../data/departments'
import { employeeFormData } from '../data/employeeData'
import states from '../data/states'
import { Context } from '../store'
import getSelectOptions from '../utils/getSelectOptions'

const CreateEmployee = () => {
  const navigate = useNavigate()
  const errorfield = useRef(null)
  const { checkIfEmployeeAlreadyExists, addEmployee, employeeList } =
    useContext(Context)
  const [formData, setFormData] = useState(employeeFormData)
  const [modalIsActive, setModalIsActive] = useState(false)

  function handleErrorMessage(action) {
    const errorIsShowing = errorfield.current.classList.contains('visible')
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

  function handleDatesChange(newDate, objKey) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [objKey]: newDate,
      }
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const isNewEmployee = await checkIfEmployeeAlreadyExists(formData)
    if (isNewEmployee) {
      await addEmployee(formData)
      setFormData(employeeFormData)
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
          placeholder="John"
          onChange={handleChange}
          value={formData.firstName}
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Jackson"
          onChange={handleChange}
          value={formData.lastName}
          required
        />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <DatePicker
          name="dateOfBirth"
          id="dateOfBirth"
          onChange={(newDate) => handleDatesChange(newDate, 'dateOfBirth')}
          value={formData.dateOfBirth}
          clearIcon={null}
          maxDate={new Date()}
          required={true}
          format="dd/MM/yyyy"
          dayPlaceholder="dd"
          monthPlaceholder="mm"
          yearPlaceholder="yyyy"
        />

        <label htmlFor="startDate">Start Date</label>
        <DatePicker
          type="date"
          name="startDate"
          id="startDate"
          onChange={(newDate) => handleDatesChange(newDate, 'startDate')}
          value={formData.startDate}
          clearIcon={null}
          minDate={new Date()}
          required={true}
          format="dd/MM/yyyy"
          dayPlaceholder="dd"
          monthPlaceholder="mm"
          yearPlaceholder="yyyy"
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
            placeholder="20 W 34th Street"
            onChange={handleChange}
            value={formData.street}
            required
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="New York"
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
            type="text"
            id="zipCode"
            name="zipCode"
            onChange={handleChange}
            value={formData.zipCode}
            placeholder="10001"
            pattern="^[0-9]{5}(?:-[0-9]{4})?$"
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
