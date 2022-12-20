
import React, { useEffect, useState } from "react";
import axios from 'axios';
import {API_HOST, API_TOKEN, API_URL} from "../consts";
import Card from "./Card";


const CoronaForCountry = () => {
  
    
    const[data,setData] = useState([])
    const[queryText, setQueryText]= useState("")


    const fetchData = () => {
        fetch(`${API_URL}?country=${queryText}`)
        .then((response) => response.json())
        .then((results) => setData(results.data.covid19Stats))
       
    }


useEffect(() => {
  
    fetchData()
    console.log(data)

}, [queryText])


  

    return(
        <>
           <div className="mb-4">
                <input onChange={(e) => {
                    setQueryText(e.target.value)
                }}
                       placeholder="Search ..."
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-violet-600"/>
            </div>

             
          
            <div className="grid grid-cols-4 gap-4">
                {data.map((item) => {
                  
                        return (
                            <Card city={item.province} key={item.keyId} country={item.country} totalDeaths={item.deaths}
                                  totalCase={item.confirmed} totalRecovered={"Covid Reporter"}/>
                        )
                    
                   
                })}
            </div>
              
               
       

        </>
    )
}

export default CoronaForCountry