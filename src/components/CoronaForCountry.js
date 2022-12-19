
import React, { useEffect, useState } from "react";
import axios from 'axios';
import {API_TOKEN, API_URL} from "../consts";


const CoronaForCountry = () => {
    
    const[data,setData] = useState([])
    const[queryText, setQueryText]= useState("")
    const[loading,setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        const response = await axios.get(`${API_URL}countriesData?country=${queryText}`, {
            headers: {
                authorization: API_TOKEN
            }
        })
        setLoading(false)
        console.log(response)
    }
    useEffect(() => {
        fetchData()
    }, [queryText])
    

    return(
        <>
        <div className="mb-4">
            <input value={queryText} onChange={(e) => {
                setQueryText(e.target.value)
            }}></input>
        </div>

        </>
    )
}

export default CoronaForCountry