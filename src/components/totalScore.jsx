import React from 'react'

const totalScore = ({score}) => {
  return (
    <div className='max-w-52	text-center'>
      <h1 className='text-7xl font-bold leading-tight	' >{score}</h1>
      <p className='font-semibold text-sm  '>Total Score</p>
    </div>
  )
}

export default totalScore
