import React from 'react'

function Doctorcard({name,specialization,gender}) {
  return (
    <div className='card'>
        <div><img width='100%' height='100%' src="https://cdn-icons-png.flaticon.com/512/387/387561.png" alt="" /></div>
        <h1>{name}</h1>
        <h3>{specialization}</h3>
        <p>{gender}</p>
        <button>View Details</button>
    </div>
  )
}

export default Doctorcard