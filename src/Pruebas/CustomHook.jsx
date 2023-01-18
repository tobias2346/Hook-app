import React from 'react'
import { useForm } from '../Hooks/useForm'


export const CustomHook = () => {

    const {formState, onInputChange, resetForm} = useForm()

    const {username, email, password} = formState; 

  return (
    <>
        <div>Formulario</div>

        <input type="text" 
        className='form-control'
        placeholder='escribe tu nombre'
        name='username'
        onChange={onInputChange}
        value={username}
        />

        <input type="text" 
        className='form-control'
        placeholder='escrie tu email'
        name='email'
        onChange={onInputChange}
        value={email}
        />

        <input type="text"
        className='form-control' 
        placeholder='escribe tu contrasenia'
        name='password'
        onChange={onInputChange}
        value={password}
        />

        <button onClick={resetForm} className='btn btn-primary mt-2'>Borrar</button>
    </>
  )
}
