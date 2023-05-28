import React from 'react'

const Model = ({mess}) => {
  return (
    <>
    <div className={`container text-center my-4 ${mess === 'TODO ADDED' ? 'text-success':'text-danger'}`}>
      <h4> {mess}</h4>
    </div>
    
    </>
  )
}

export default Model