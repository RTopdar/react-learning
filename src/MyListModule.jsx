// eslint-disable-next-line no-unused-vars
import React from 'react'

function MyListModule() {
  const numbers =[1,2,3,4,5,6,7,8,9,9,910];
  const numList = numbers.map((number, index) => <li key={index}>{number}</li>)
  
    return (
    <div>{numList}</div>
  )
}

export default MyListModule