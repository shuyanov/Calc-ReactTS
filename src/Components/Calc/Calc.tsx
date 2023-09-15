import React from "react";
import Display from "../Display/Display";
import { ButtonNumbers } from "../Buttons/ButtonNumbers/ButtonNumbers";
;
import style from "./Calc.module.scss";
import { ButtonFunction } from "../Buttons/ButtonFunction/ButtonFunction";
import { ButtonClear } from "../Buttons/ButtonClear/ButtonClear";
import { ButtonEquality } from "../Buttons/ButtonEquality/ButtonEquality";
import { ButtonBack } from "../Buttons/ButtonBack/ButtonBack";


export const Calc = () => {
    return (
        <div className={style.calc}>
            <Display />
            <div className={style.clacNumber}>
                <ButtonClear />
                <ButtonFunction number={'+'} ></ButtonFunction>
                <ButtonFunction number={'-'} ></ButtonFunction>
                <ButtonFunction number={'*'} ></ButtonFunction>
                <ButtonFunction number={'/'} ></ButtonFunction>
                <ButtonNumbers number={1} ></ButtonNumbers>
                <ButtonNumbers number={2} ></ButtonNumbers>
                <ButtonNumbers number={3} ></ButtonNumbers>
                <ButtonNumbers number={4} ></ButtonNumbers>
                <ButtonNumbers number={5} ></ButtonNumbers>
                <ButtonNumbers number={6} ></ButtonNumbers>
                <ButtonNumbers number={7} ></ButtonNumbers>
                <ButtonNumbers number={8} ></ButtonNumbers>
                <ButtonNumbers number={9} ></ButtonNumbers>
                <ButtonNumbers number={0} ></ButtonNumbers>
                <ButtonNumbers number='.' ></ButtonNumbers>
                <ButtonEquality />
                <ButtonBack />

            </div>
        </div>
    )
} 