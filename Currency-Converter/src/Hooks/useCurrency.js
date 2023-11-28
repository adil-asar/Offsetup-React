import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const useCurrency = (currency) => {

 const [apidata,setapidata] = useState({})

 useEffect(() => {
   fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
   .then((res) => res.json())
   .then((res) => setapidata(res[currency]))
   
 }, [currency])
 
  return  apidata
}

export default useCurrency
