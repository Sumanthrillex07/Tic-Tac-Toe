import React from 'react'
import './Continue.css'
export const Continue = ({resetBoard,Ngame}) => {
  return (
    <div>
    <button className="resetbtn" onClick={resetBoard}>Continue</button>
    <button className='nbtn' onClick={Ngame}>New</button>
   </div>
  )
}
