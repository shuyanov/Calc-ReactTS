import React from "react";
import style from './ButtonNumbers.module.scss'

interface ButtonNumbersProps {
    number: number
    onClick: (value: number) => void
}

export const ButtonNumbers: React.FC<ButtonNumbersProps> = ({ number, onClick }) => {
    return (
        <button className={style.Numbers} onClick={() => onClick(number)}>
            <div className={style.child}>
                {number}
            </div>
        </button>
    )
} 