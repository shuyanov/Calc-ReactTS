import React from "react";
import style from './ButtonFunction.module.scss'

interface ButtonNumbersProps {
    number: string
    onClick: () => void
}

export const ButtonFunction: React.FC<ButtonNumbersProps> = ({ number, onClick }) => {
    return (
        <button className={style.Numbers} onClick={onClick}>
            <div className={style.child}>
                {number}
            </div>
        </button>
    )
} 