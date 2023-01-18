import React, {useEffect} from 'react'

export const Message = () => {

   useEffect(() => {
    
  
    return () => {
      console.log('message unmounted')
    }
  }, [])
  
  return (
    <>
    
        <h3>Usuario existe</h3>

    </> 
  )
}
