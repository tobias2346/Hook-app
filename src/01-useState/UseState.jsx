import React from 'react'
import { useState } from 'react';


export const UseState = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const {counter1, counter2, counter3 } = state

    return (
    <>

        <h3>Counter: {counter1}</h3>
        <h3>Counter: {counter2}</h3>
        <h3>Counter: {counter3}</h3>
        <hr />
        <button onClick={() => setCounter({
            ...state,
            counter1: counter1 + 1
        }) }>+1</button>
        <button>-1</button>

    </>
  )
}
