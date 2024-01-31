import React, { useState } from 'react'
import Start from './components/start';
import First from './components/First';


const App = () => {
  const [isGameStarted,SetisGameStarted]=useState(false);

  const toggleGamePlay=()=>{
    SetisGameStarted((prev)=>!prev);
  }
  return (
  <>
        {isGameStarted ? <First/> : <Start  toggle={toggleGamePlay}/> }
      
          
   </>
  )
}

export default App
