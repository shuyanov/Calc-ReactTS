import React, { useContext } from "react";
import style from './ButtonEquality.module.scss'
import { NumberContext } from "../NumberProvider/NumberProvider";



export const ButtonEquality = () => {
    const contextValue = useContext(NumberContext);
    const doMath = contextValue?.doMath;

    return(
        <button className={style.Numbers} onClick={() => {doMath && doMath()}}>
            <div  className={style.child}>
                =
            </div>
        </button>
    )
} 