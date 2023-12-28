import { useState } from 'react'

import './index.css'

function App() {
  function addBtn() {
  console.log("working");
  }
  return (
    <>
    <h1 className='text-5xl text-center text-slate-700 mt-5 '>NYT - Note Your Tasks</h1>
    <div className='flex  justify-center mt-16'><input className='border-2 rounded-xl px-1 w-1/4 border-black	' type="text"  name="" id="" /> <button onClick={addBtn} className='ml-2'>  <i className="text-2xl fa-solid fa-plus"></i></button></div>
    
</>

)

}

export default App
