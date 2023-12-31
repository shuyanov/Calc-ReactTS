import React, { useContext } from "react";
import style from './ButtonNumbers.module.scss'
import { NumberContext } from "../../NumberProvider/NumberProvider";

interface ButtonNumbersProps {
    number: number | string
}

export const ButtonNumbers: React.FC<ButtonNumbersProps> = ({ number }) => {
    const contextValue = useContext(NumberContext);
    const handleSetDisplayValue = contextValue?.handleSetDisplayValue;

    return (
        <button className={style.Numbers} onClick={() => { handleSetDisplayValue && handleSetDisplayValue(String(number)) }}>
            <div className={style.child}>
                <div className={style.circle}>
                    {number}
                </div>
            </div>
        </button>
    )
} 