import React from "react";
import PropTypes from "prop-types"



const MenuItem = ({title,active,onClick}) => {
    return(
        <li> <a onClick={() => {
            onClick(title)
        }} className={`block cursor-pointer transition pr-4 pl-3 border-0 ${active?'text-blue-700':'text-white'} hover:text-blue-600`}>
        {title}
    </a> </li>
    )
}


MenuItem.propTypes={
    title:PropTypes.string,
    active:PropTypes.bool,
    onClick:PropTypes.func
}

MenuItem.defaultProps={
title:"Covid App",
active:false,
onClick:()=>null
}

export default MenuItem