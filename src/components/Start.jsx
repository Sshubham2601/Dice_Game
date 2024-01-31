import React from 'react'

const Start = ({toggle}) => {
  return (
    <>

    <div className='flex justify-evenly items-center w-screen my-20  ml-40 md sm-row-1 max-w-screen-lg		'>
          <div className=' '>
                    <img src="/images/dices.png " alt="" className='h-45 w-50'/>
          </div>
          <div className=''>
                    <h1 className='text-5xl font-extrabold font-serif	tracking-wide md'>DICE GAME</h1>
                    
                    <button onClick={toggle} className=' float-end  border border-none mt-3 bg-gray-900 hover:bg-gray-700 text-white  w-40 h-7 rounded p-1'>Play Now</button>
                
          </div>
    
    </div>
   
    </>
  )
}

export default Start;
