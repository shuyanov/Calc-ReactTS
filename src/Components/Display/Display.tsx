import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider/NumberProvider';

const Display: React.FC = () => {
  const contextValue = useContext(NumberContext);
  const number = contextValue?.number || '';
  const storedNumber = contextValue?.number || '';
  const functionType = contextValue?.number || '';  
  return (
    <div>
      <h2>{!number.length && !storedNumber ? '0' : number || storedNumber}</h2>
      <p>{!storedNumber ? 'ENTER SOME NUMBERS' : `${storedNumber} ${functionType} ${number}`}</p>
    </div>
  );
};

export default Display;