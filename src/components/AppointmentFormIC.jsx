import React, { useState } from 'react'

const AppointmentFormIC = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <form className="stack-form" onSubmit={(event) => event.preventDefault()}>
      <div className="form-group">
        <label htmlFor="ic-name">Name</label>
        <input
          id="ic-name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="ic-phone">Phone Number</label>
        <input
          id="ic-phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </div>
    </form>
  )
}

export default AppointmentFormIC
