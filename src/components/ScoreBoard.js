import React from 'react'
import './ScoreBoard.css'

export const ScoreBoard = ({scores,xplay}) => {
    const {xScore,oScore}=scores;
  return (
    <div className='ScoreBoard'>
        <span className={`scores xs ${!xplay&&"inactive"}`}> X - {xScore} </span>
        <span className={`scores os ${xplay&&"inactive"}`}> O - {oScore} </span>
    </div>
  )
}
