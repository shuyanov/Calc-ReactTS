import React, { useContext } from "react";
import style from './ButtonFunction.module.scss'
import { NumberContext } from "../../NumberProvider/NumberProvider";

interface ButtonNumbersProps {
    number: string
}

export const ButtonFunction: React.FC<ButtonNumbersProps> = ({ number }) => {
    const contextValue = useContext(NumberContext);
    const handleSetCalcFunction = contextValue?.handleSetCalcFunction;

    return (
        <button className={style.Numbers} onClick={() => { handleSetCalcFunction && handleSetCalcFunction(String(number)) }}>
            <div className={style.child}>
                <div className={style.circle}>
                    {number}
                </div>
            </div>
        </button>
    )
} 