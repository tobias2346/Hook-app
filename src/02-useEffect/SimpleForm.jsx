import React from 'react'
import { useState, useEffect} from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: ''
    })

    const { username, email } = formState;

    const onInputChange = ({target}) => {
       const { name, value } = target;
       setFormState({
        ...formState,
        [ name ] : value 
       })
    };


    useEffect(() => {
     
    },[email]);
    


  return (
    <>

    <h2>UseEffect</h2>

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


    {
      (username === 'tobias') && <Message/>
    }
    </>
    
  )
}
