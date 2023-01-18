import React from 'react';
import { useCounter } from '../Hooks/useCounter';
import { useFetch } from '../Hooks/useFetch';

export const MultiCustomHooks = () => {

    const initialValue = 0

    const {suma, counter} = useCounter(initialValue);

    const api_key = 'api_key=Z8TFD1R6zTddHKQywRXYFvXFP781WIfj'

    const keyWord = 'cheeseburger'

    const { data, isLoading, hasError } = useFetch(`https://api.giphy.com/v1/stickers/search?${api_key}&q=${keyWord}&limit=${counter}`);

    if(data === null){
      return
    }
 
    return (
    <>

    <h1>Breaking bad</h1>
    
    <hr />

    <button className=' btn btn-primary m-2' onClick={() => suma(1)}>Agregar gifs</button>

    <hr />

    {
      (isLoading) 
      ? (
          <div className='alert alert-info text-center none'>
            Loading...
          </div>
      ) 
      : ( 
          <blockquote className='blockquote text-rigth'>
              <p className='mb-1'>Hola mundo</p>
              {
                data.map((data) => (
                  <div key={data.id + 'a'}>
                    <footer className=' blockquote-footer' key={data.img}>{data.type}</footer>
                    <img src={data.img} alt={data.img} key={data.id} />
                  </div>
                ))
              }

          </blockquote>
      )
    }

    </>
  )
}
 