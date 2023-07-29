// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState, useEffect } from 'react';

function MyCounterModule() {

    const [counter, setCounter] = useState(0);
  
  const incrementCounter = () => {
    setCounter(counter+1)
  }
  const resetCounter = () => {
    setCounter(0)
  }
  useEffect(() => {console.log(`Number value is: ${counter}`)}, [counter])
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-slate-600'>
    <button className= "rounded-full text-white h-20 mr-40 bg-indigo-500 w-52" onClick={incrementCounter}>Add</button>
    <button className= "rounded-full text-white h-20 mr-40 bg-indigo-500 w-52" onClick={resetCounter}>Reset</button>
    <div>{counter}</div>
    
  </div>
  )
}

export default MyCounterModule