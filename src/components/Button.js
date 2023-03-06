import React from 'react'

const Button = ({value}) => {
  return (
    <div className={value==='='? 'button different': 'button'}>
        <p>{value}</p>
    </div>
  )
}

export default Button