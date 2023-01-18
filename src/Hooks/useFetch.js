import { useEffect, useState } from "react";


export const useFetch = ( url ) => {   

    const [state, setState] = useState({
        data : null,
        isLoading: true,
        hasError: null
    })  

    const getFecth = async() => {

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url)
        const {data} = await resp.json();
        
        // const newImg = data.map((data) => (data.images.downsized.url))
        // const newId = data.map((data) => (data.id))
        // const newType = data.map((data) => (data.type))
        const newData = data.map((data) => ({
            img : data.images.downsized.url,
            type: data.type,
            id: data.id
        }))
        setState({
            data : newData,
            isLoading: false,
            hasError: null
        })

    }

    useEffect(() => {
      getFecth();
    }, [url])
    


    return { 
        data : state.data,
        isLoading : state.isLoading ,
        hasError : state.hasError
    };
}