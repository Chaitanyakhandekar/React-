import { useEffect, useState } from 'react'

function useCurrencyInfo(currency){
    const [data,setData] = useState([]) //* we are setting default value as empty array because if unfortunatly if we didnt get any response then our app doesnt crash

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res))
        console.log(data)
    },[currency]);

    return data;

}

export default useCurrencyInfo;