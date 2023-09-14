import React from "react";
import Display from "../Display/Display";
import { ButtonNumbers } from "../ButtonNumbers/ButtonNumbers";
import { ButtonFunction } from "../ButtonFunction/ButtonFunction";
import { ButtonEquality } from "../ButtonEquality/ButtonEquality";
import { useCalc } from "../../hook/useCalc";

export const Calc = () => {
    const { counter,
        displayCounter,
        handleSum,
        handleMinus,
        handleNumberClick,
        handleResult } = useCalc()

    return (
        <div>
            <Display counter={counter} displayCounter={displayCounter} />
            <ButtonNumbers onClick={handleNumberClick} number={1} ></ButtonNumbers>
            <ButtonNumbers onClick={handleNumberClick} number={2} ></ButtonNumbers>
            <ButtonNumbers onClick={handleNumberClick} number={3} ></ButtonNumbers>
            <ButtonNumbers onClick={handleNumberClick} number={4} ></ButtonNumbers>
            <ButtonNumbers onClick={handleNumberClick} number={5} ></ButtonNumbers>
            <ButtonNumbers onClick={handleNumberClick} number={6} ></ButtonNumbers>
            <ButtonNumbers onClick={handleNumberClick} number={7} ></ButtonNumbers>
            <ButtonNumbers onClick={handleNumberClick} number={8} ></ButtonNumbers>
            <ButtonNumbers onClick={handleNumberClick} number={9} ></ButtonNumbers>
            <ButtonNumbers onClick={handleNumberClick} number={0} ></ButtonNumbers>
            <ButtonFunction onClick={handleSum} number={'+'} ></ButtonFunction>
            {/* <ButtonFunction number={'/'} ></ButtonFunction>
            <ButtonFunction number={'*'} ></ButtonFunction> */}
            <ButtonFunction onClick={handleMinus} number={'-'} ></ButtonFunction>
            <ButtonEquality onClick={handleResult} ></ButtonEquality>

        </div>
    )
} 