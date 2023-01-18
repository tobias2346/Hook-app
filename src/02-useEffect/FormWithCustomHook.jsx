import React from 'react';
import { useForm } from '../Hooks/useForm';

export const FormWithCustomHook = () => {

const {formState, onInputChange, resetForm} = useForm();

const { username, email, password } = formState;

  return (
    <>

    <h2>Formulario con custom hook</h2>

    <hr />

    <input type="text" 
    className='form-control'
    placeholder='Username'
    name='username'
    value={username}
    onChange={onInputChange}/>

    <input type="email" 
    className='form-control mt-2'
    placeholder='exapmle@email.com'
    name='email'
    value={email}
    onChange={onInputChange}/>

    <input type="password" 
    className='form-control mt-2'
    placeholder='abc123'
    name='password'
    value={password}
    onChange={onInputChange}/>

    <button className='btn btn-primary'
    onClick={resetForm}>submit</button>

    </>

  )
}
