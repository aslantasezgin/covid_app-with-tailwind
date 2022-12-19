
import React, { useEffect, useState } from "react";
import axios from 'axios';
import {API_TOKEN, API_URL} from "../consts";
import Card from "./Card";


const CoronaForCountry = () => {
  
    
    const[data,setData] = useState([])
    const[queryText, setQueryText]= useState("")
    const[loading,setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        var myVar = {"id" : 1};
        fetch(`${API_URL}countriesData?country=${queryText}`,
        {
          method:"GET",
          headers:{
            authorization:API_TOKEN,
            "Access-Control-Allow-Origin": "*",
                "Content-Type": "text/plain",
          },
          body: JSON.stringify(myVar)
        }
        )
        .then((response) => response.json())
        .then((results) => setData(results.data.result))

        setLoading(false)


  }


    useEffect(() => {
        fetchData()
    }, [queryText])
    

    return(
        <>
      <div className="mb-4">
                <input value={queryText} onChange={(e) => {
                    setQueryText(e.target.value)
                }}
                       placeholder="Ara ..."
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-violet-600"/>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {loading && <p>Loading ...</p>}
                {data.map((item) => {
                    return (
                        <Card key={item.country} country={item.country} totalDeaths={item.totalDeaths}
                              totalCase={item.totalCases} totalRecovered={item.totalRecovered}/>
                    )
                })}
            </div>

        </>
    )
}

export default CoronaForCountry