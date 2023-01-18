import { useState } from "react"

export const useCounter = ( initialValue = 1 ) => {

    const [counter, setCounter] = useState(initialValue)

    const suma = (value = 1) => {
        setCounter(counter + value)
    }

    const resta = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(0)
    }



    return {
        counter,
        suma,
        resta, 
        reset
    }
}