import React, { useEffect, useState } from 'react';

const useData = () => {
    const [property,setProperty] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch('/data.json')
            const data = await res.json()
            setProperty(data)
        }
        fetchData()
    },[])
    return {property}
};

export default useData;