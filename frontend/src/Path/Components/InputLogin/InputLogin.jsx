import React, { forwardRef } from 'react'
import './style.css'

const InputLogin = forwardRef((props, ref) => {

  return (
    <div className='login-phone'>
      <input type='tel' ength="10" placeholder='Enter mobile number' className='login-phone__input' ref={ref} />
    </div>
  )
});

export default InputLogin