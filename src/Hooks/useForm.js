import React, {useState} from 'react'

export const useForm = () => {
    
    const [formState, setFormState] = useState( {
        username: '',
        email: '',
        password: ''
      } )

    const onInputChange = ({target}) => {
       const { name, value } = target;
       setFormState({
        ...formState,
        [ name ] : value 
       })
    };

    const resetForm = () => {
        setFormState({
        username: '',
        email: '',
        password: ''})
    }


    return{
        formState,
        onInputChange,
        resetForm
    }

}
