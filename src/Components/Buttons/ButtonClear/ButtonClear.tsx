import React, { useContext } from "react";
import style from './ButtonClear.module.scss'
import { NumberContext } from "../../NumberProvider/NumberProvider";



export const ButtonClear = () => {
    const contextValue = useContext(NumberContext);
    const doMath = contextValue?.handleClearValue;

    return(
        <button className={style.Numbers} onClick={() => {doMath && doMath()}}>
            <div  className={style.child}>
                AC
            </div>
        </button>
    )
} 