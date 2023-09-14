import React, { PropsWithChildren, useState } from 'react';

interface NumberContextValue {
    doMath: () => void;
    handleSetDisplayValue: (num: string) => void;
    handleSetCalcFunction: (type: string) => void;
    handleClearValue: () => void;
    handleBackButton: () => void;
    handleSetStoredValue: () => void;
    handleToggleNegative: () => void;
    functionType: string;
    number: string;
    storedNumber: string;
    setNumber: React.Dispatch<React.SetStateAction<string>>;
}

export const NumberContext = React.createContext<NumberContextValue | null>(null);

const NumberProvider: React.FC<PropsWithChildren<NumberContextValue>> = ({children}) => {    
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');


  const handleSetDisplayValue = (num: string) => {
    if (!number.includes('.') || num !== '.') {
      setNumber(`${(number + num).replace(/^0+/, '')}`);
    }
  }

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
  };

  const handleBackButton = () => {
    if (number !== '') {
      const deletedNumber = number.slice(0, number.length - 1);
      setNumber(deletedNumber);
    }
  };

  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(
            `${Math.round((parseFloat(storedNumber) + parseFloat(number)) * 100) / 100}`
          );
          break;
        case '-':
          setStoredNumber(
            `${Math.round((parseFloat(storedNumber) - parseFloat(number)) * 1000) / 1000}`
          );
          break;
        case '/':
          setStoredNumber(
            `${Math.round((parseFloat(storedNumber) / parseFloat(number)) * 1000) / 1000}`
          );
          break;
        case '*':
          setStoredNumber(
            `${Math.round(parseFloat(storedNumber) * parseFloat(number) * 1000) / 1000}`
          );
          break;
        default:
          break;
      }
      setNumber('');
    }
  };

  const handleToggleNegative = () => {
    if (number) {
      if (parseFloat(number) > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (parseFloat(storedNumber) > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };


  const handleSetCalcFunction = (type: React.SetStateAction<string>) => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  return (
    <NumberContext.Provider
      value={{
        doMath,
        functionType,
        handleBackButton,
        handleClearValue,
        handleSetCalcFunction,
        handleSetDisplayValue,
        handleSetStoredValue,
        handleToggleNegative,
        number,
        storedNumber,
        setNumber,
      }}>
      {children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;