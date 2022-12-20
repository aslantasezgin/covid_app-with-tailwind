import React from "react";
import PropTypes from "prop-types"


const countryImage = "https://kolanhastanesi.com.tr/images/uploads/3d946d6ec995cd440ffe21bb50e8b755.jpg"

const Card = ({country,totalDeaths, totalRecovered, totalCase, city}) => {
    return(
        <div className="max-w-sm rounded border-gray-600 overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all">
        <img src={countryImage} className="w-full" alt="Country"></img>

        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{country} 
                <span className="block text-sm">{city}</span>
             </div>
            <p className="text-gray-700 text-base">
                Total Case : {totalCase}
            </p>

            <p className="text-gray-700 text-base">
                Total Deaths : {totalDeaths}
            </p>
        </div>

        <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{totalRecovered}
        </span>
        </div>

        </div>
    )
}


Card.propTypes={
    country:PropTypes.string,
    city:PropTypes.string,
    totalCase:PropTypes.string,
    totalRecovered:PropTypes.string,
    totalDeaths:PropTypes.string
   
}

Card.defaultProps={
    country:"",
    totalCase:"",
    totalRecovered:"",
    totalDeaths:""
}

export default Card