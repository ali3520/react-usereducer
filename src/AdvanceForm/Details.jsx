import React from 'react'

const Details = ({name,address,email,cell}) => {
  return (
    <>
    <div className="container w-75 m-auto bd-dark text-light"></div>
    <div className="row text-center">
        <div className="col-lg-6">
            <h3>{name}</h3>
            <p>{address}</p>
        </div>
        <div className="col-lg-6">
            <h3>{email}</h3>
            <p>{cell}</p>
        </div>
    </div>
    </>
  )
}

export default Details