import React from 'react'

const Monitor = ({result,operation}) => {
  return (
    <div className='monitor'>
        <div className="operation">{operation}</div>
        <div className="answer">{result}</div>
    </div>
  )
}

export default Monitor