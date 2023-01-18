import React from 'react'
import { useCounter } from '../Hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, suma, resta, reset } = useCounter()



  return (
    <>

    <h1>CounterWithCustomHook {counter}</h1>
    <hr />
    <button onClick={() => suma(3)} className=' btn btn-primary m-2'> + 1</button>
    <button onClick={reset} className=' btn btn-primary m-2'> Reset </button>
    <button onClick={resta} className=' btn btn-primary m-2'> - 1</button>

    </>
  )
}
