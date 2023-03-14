import React from 'react'

const Monitor = ({result}) => {
  return (
    <div className='monitor'>
        <div className="operation"></div>
        <div className="answer">{result}</div>
    </div>
  )
}

export default Monitor