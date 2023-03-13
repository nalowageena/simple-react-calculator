import React from 'react'

const Button = ({value, updateOperation}) => {

  return (
    <div className={value==='='? 'button different': 'button'} onClick={()=>
        updateOperation(value)}>
        <p>{value}</p>
    </div>
  )
}

export default Button