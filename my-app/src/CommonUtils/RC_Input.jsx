import React from 'react'

function RC_Input({ type, placeholder, value, onChange,Class , name}) {
  return (
    <>
    <input
      type={type}
      className={Class}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
    </>
  )
}

export default RC_Input;