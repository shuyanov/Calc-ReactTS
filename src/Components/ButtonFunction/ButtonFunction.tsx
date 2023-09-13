import React, { useContext } from "react";
import style from './ButtonFunction.module.scss'
import { NumberContext } from "../NumberProvider/NumberProvider";

interface ButtonNumbersProps {
    symbol: string
}

export const ButtonFunction: React.FC<ButtonNumbersProps> = ({symbol}) => {
    const contextValue = useContext(NumberContext);
    const handleSetCalcFunction = contextValue?.handleSetCalcFunction;
    
    return(
        <button className={style.Numbers} onClick={() => {handleSetCalcFunction && handleSetCalcFunction(symbol)}}>
            <div  className={style.child}>
                {symbol}
            </div>
        </button>
    )
} 