import React from 'react'

const MapingRender = ({id, name, img}) => {
  return (
    <div key={id}>
      <h1>{name}</h1>
      <img src={img} alt="" />
    </div>
  )
}

export default MapingRender