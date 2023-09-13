import React, { useContext } from "react";
import style from './ButtonEquality.module.scss'
import { NumberContext } from "../NumberProvider/NumberProvider";



export const ButtonEquality = () => {
    const contextValue = useContext(NumberContext);
    const doMath = contextValue?.doMath;
    if(doMath === undefined) return

    return(
        <button className={style.Numbers} onClick={() => doMath()}>
            <div  className={style.child}>
                =
            </div>
        </button>
    )
} 