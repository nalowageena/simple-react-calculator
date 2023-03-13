import React from 'react'

const Button = ({value, handleTask}) => {

  return (
    <div className={value==='='? 'button different': 'button'} onClick = {()=> handleTask(value)}>
        <p>{value}</p>
    </div>
  )
}

export default Button