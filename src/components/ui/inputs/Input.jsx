import React from 'react'

const Input = ({value , text, setData}) => {
  return (
    <input type="text" placeholder={text} value={value} onChange={(e) => {
      setData(e.target.value)
    }} />
  )
}

export default Input