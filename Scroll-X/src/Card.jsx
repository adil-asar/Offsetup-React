import React from 'react'

const Card = ({data}) => {
  return (
    <div className='card'>
        <img  className="img-css" src={data.url} alt="" />
      <p>
        {data.name}
      </p>
    </div>
  )
}

export default Card
