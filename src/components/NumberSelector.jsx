import React, { useState } from 'react';

const NumberSelector = ({ setError, error,selectedNumber,setSelectedNumber}) => {
          const arrNumber = [1, 2, 3, 4, 5, 6];


          // const [selectedNumber, setSelectedNumber] = useState(null);
          const [isSelect, setIsSelect] = useState(false);

          const handleClick = (value) => {
                    setSelectedNumber(value); 
                    setIsSelect(true);
                    setError("")
          };

          // console.log(selectedNumber);
  
          
          return (
                    <main>
                              <p className='font-semibold text-red-600'>{error}</p>
                    <div className='flex gap-4 container mx-auto'>
                              {arrNumber.map((value, i) => (
                                        <button
                                                  key={i}
                                                  onClick={() => handleClick(value)}
                                                  className={`cursor-pointer	 box-border h-12 w-12 border border-gray-500 grid justify-center items-center text-sm font-bold ${isSelect && selectedNumber === value ? 'bg-black text-white' : 'bg-white text-black'
                                                            }`}
                                        >
                                                  {value}
                                                  
                                        </button>
                                        
                                       
                              ))}
                                
                    </div>
                    <p className='  float-end font-bold leading-10'>Select Number</p> 
                    </main>
                  
          );
};

export default NumberSelector;
