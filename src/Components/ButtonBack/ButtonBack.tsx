import React, { useContext } from "react";
import style from './ButtonBack.module.scss'
import { NumberContext } from "../NumberProvider/NumberProvider";



export const ButtonBack = () => {
    const contextValue = useContext(NumberContext);
    const handleBackButton = contextValue?.handleBackButton;

    return(
        <button className={style.Numbers} onClick={() => {handleBackButton && handleBackButton()}}>
            <div  className={style.child}>
                B
            </div>
        </button>
    )
} 