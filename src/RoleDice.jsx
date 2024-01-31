// import React, { useState } from 'react'

const RoleDice = ({currentDice,roleDice}) => {
  // const [currentDice,setCurrentDice]=useState(1);

  // const generateRandomNumber=(min,max)=>{
  //               return Math.floor(Math.random() * (max-min)+min) ;
  // };
  // const roleDice=( )=>{
  //           const randomNumber=generateRandomNumber(1,7);
  //           setCurrentDice((prev)=>randomNumber);
  // }
  return (
    <main className=' grid justify-center '>
                    <div className='cursor-pointer ' onClick={roleDice}>
                    <img src={`/images/image/dice_${currentDice}.png`} alt="dice 1" className='flex max-w-48 h-auto 	'/>
                    </div>
          <p className='grid justify-center font-semibold'>Click on Dice to Roll</p>
          {/* <div className='grid justify-center'>
            <button className=' border mt-3 bg-white-900 hover:bg-gray-700 text-black  hover:text-white w-40 h-7 rounded  font-bold'>Reset Score</button>
          </div>
          <div className='grid justify-center py-5'>
          <button className='border border-none mt-0 bg-gray-900 hover:bg-gray-700 text-white  w-40 h-7 rounded'>Show Rules</button>
          </div> */}
    </main>
  )
}

export default RoleDice
