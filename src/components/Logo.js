import React from "react";
import PropTypes from "prop-types"

const Logo = ({title,logo}) => {
    return(
    <div className="flex w-full items-center justify-center">
    <img src={logo} alt={title} className="mr-3 h-9"></img>
    <span className="self-center text-l font-semibold text-white">{title} </span>
    </div>
    )
}

Logo.propTypes={
    title:PropTypes.string,
    logo:PropTypes.string
}

Logo.defaultProps={
title:"Covid Report",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/1020px-SARS-CoV-2_without_background.png"
}

export default Logo