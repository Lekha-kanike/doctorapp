import React from 'react'
import Navbar from './components/Navbar'
import './components/styles.css'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import { useState } from 'react'
// import { useEffect } from 'react'
function App() {
  const [count,setCount]=useState(0)
  // useEffect(()=>{

  // },[])
  return (
    <div>
      {count}
      <button onClick={()=>setCount(count+1)}> inc </button>
      <Navbar />
      <Section />
      <div className="doctorparent">
        <Doctorcard name='John' specialization='Heart' gender='Male' />
        <Doctorcard name='Sivaram' specialization='Ortho' gender='Male' />
        <Doctorcard name='Teja' specialization='Muscles' gender='Male' />
        <Doctorcard name='Vasavi' specialization='Psycho' gender='Female' />
        <Doctorcard name='Madhu' specialization='Neuro' gender='Male' />

      </div>
      <Addnewdoctor/>

    </div>
  )
}

export default App