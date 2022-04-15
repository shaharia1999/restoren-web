import React, { useEffect, useState } from 'react';

const UseHooks = () => {
    const [datas,setDatas]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setDatas(data));
    },[])
    return datas;
};

export default UseHooks;