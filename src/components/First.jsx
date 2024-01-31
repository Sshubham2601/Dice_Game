import {useState} from 'react';
import TotalScore from './totalScore';
import NumberSelector from './NumberSelector';
import RoleDice from '../RoleDice';
import Gamerules from './Gamerules';
const First = () => {
  const [score,setScore]=useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState()
  const [showRules,setShowRules]=useState(false);
  const toggleRules=()=>{
    setShowRules((prev)=>!prev);
  }
  const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random() * (max-min)+min) ;
};
const roleDice=( )=>{
  if(!selectedNumber){
    setError("You Have Not Select Any Number");
    return
  }
 
const randomNumber=generateRandomNumber(1,7);
setCurrentDice((prev)=>randomNumber);



if(selectedNumber===randomNumber){
  setScore((prev)=>prev+randomNumber);
}else{
  setScore((prev)=>prev-2);
}
setSelectedNumber(undefined)
};
 
const resetScore=()=>{
  setScore(0);
}


  return (
    <main>
      <div className='flex justify-between  my-12 container mx-auto sm-1 md'>
        <TotalScore score={score}/>
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div >
      <RoleDice currentDice={currentDice} roleDice={roleDice}/>
      <div className='flex flex-col items-center justify-center gap-3'>
      <button onClick={resetScore} className='border-2 mt-4 bg-white-900 hover:bg-red-700 text-black hover:text-white  w-40 h-7 rounded'>Reset</button>
      <button onClick={toggleRules} className='border border-none mt-0 bg-gray-900 hover:bg-gray-700 text-white  w-40 h-7 rounded'>{showRules ? "Hide":"Show"} Rules</button>
      </div>
     { showRules && <Gamerules/>}
    </main>
  )
}

export default First
