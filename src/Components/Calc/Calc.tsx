import React from "react";
import Display from "../Display/Display";
import { ButtonNumbers } from "../ButtonNumbers/ButtonNumbers";
import { ButtonFunction } from "../ButtonFunction/ButtonFunction";
import { ButtonEquality } from "../ButtonEquality/ButtonEquality";

export const Calc = () => {
    return(
        <div>
            <Display />
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
            <ButtonFunction number={'+'} ></ButtonFunction>
            <ButtonFunction number={'/'} ></ButtonFunction>
            <ButtonFunction number={'*'} ></ButtonFunction>
            <ButtonFunction number={'-'} ></ButtonFunction>
            <ButtonEquality ></ButtonEquality>

        </div>
    )
} 