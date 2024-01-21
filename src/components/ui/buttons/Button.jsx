import React from 'react'

const Button = ({nameBtn, onClick}) => {
  return (
    <button onClick={onClick}>{nameBtn}</button>
  )
}

export default Button