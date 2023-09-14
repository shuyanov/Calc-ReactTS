import { useState } from "react"

enum Operator {
    Sum = "+",
    Minus = "-"
}

const handleOperation: Record<Operator, (left: number, right: number) => number> = {
    [Operator.Sum]: (left: number, right: number) => left + right,
    [Operator.Minus]: (left: number, right: number) => left - right,
}

export const useCalc = () => {
    const [counter, setCounter] = useState<number>(0)
    const [displayCounter, setDisplayCounter] = useState<string>("")

    const setOperatorDisplayCounter = (operator: Operator) => setDisplayCounter(displayCounter => `${displayCounter} ${operator} `)

    const handleSum = () => {
        setOperatorDisplayCounter(Operator.Sum)
    }
    const handleMinus = () => {
        setOperatorDisplayCounter(Operator.Minus)
    }
    const handleResult = () => {
        const [left, operator, right] = displayCounter.split(' ')
        const result = handleOperation[operator as Operator](Number(left), Number(right))
        setCounter(result)
        setDisplayCounter(String(result))
    }
    const handleNumberClick = (value: number) => {
        // setCounter(counter => counter + value)
        setDisplayCounter(displayCounter => displayCounter + String(value))
    }

    return {
        counter,
        displayCounter,
        handleSum,
        handleMinus,
        handleResult,
        handleNumberClick,
    }
}