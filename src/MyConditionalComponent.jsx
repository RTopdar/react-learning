// eslint-disable-next-line no-unused-vars
import React from 'react'

function MyConditionalComponent() {
  const [boxColor, setColor] = React.useState('red');
  const boxRender = () =>{
    if(boxColor === 'red'){
      return <div className='w-1/2 h-1/2 bg-red-500'></div>
    }
    else{
      return <div className='w-1/2 h-1/2 bg-green-500'></div>
    }
  }
  return (
    <div className={`flex w-screen h-screen justify-center items-center bg-slate-500 `}>
      <button className={`bg-red-500 rounded-full text-white w-40 h-40 mr-20 ${boxColor === `red` ? `border-blue-500`:(null)} border-solid border-2`} onClick={()=>setColor('red')}>Red</button>
      <button className={`bg-green-500 rounded-full text-white w-40 h-40 ${boxColor === `green`? `border-blue-500`:(null)} border-solid border-2`} onClick={()=>setColor('green')}>Green</button>
      <div className='w-20 h-20 absolute'>
        {boxRender()}
      </div>
    </div>
  )
}

export default MyConditionalComponent