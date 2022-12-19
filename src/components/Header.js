import React, { useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types"


const Header = ({activeTitle, onMenuChange}) => {

    const[_activeTitle, setActiveTitle] = useState(activeTitle)

    const[menuItems, setMenuItems] = useState([
        {
            title:"Ülkelere Göre Covid Değerleri",
            value:1
        },
        {
            title:"Kayda Geçmiş Covid Değerleri",
            value:2
        },
        {
            title:"Kıtalara Göre Covid Değerleri",
            value:3
        }
    ])

    return(
        <nav className="bg-gray-800 border-gray-200 px-2 py-2  ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Logo></Logo>
            <div className="w-auto">
            <ul className="flex flex-row font-small text-sm pt-1">
               
                {menuItems.map((item) => {
                    return (
                        <MenuItem onClick={(title) => {
                            setActiveTitle(title)
                            onMenuChange(item.value)
                        }} key={item.title} active={item.title === activeTitle} title={item.title} ></MenuItem>
                    )
                })}

            </ul>

            </div>
            </div>
        </nav>
    )
}


Header.propTypes={
    activeTitle:PropTypes.string,
    onMenuChange:PropTypes.func,
   
}

Header.defaultProps={
activeTitle:"Ülkelere Göre Covid Değerleri",
onMenuChange:()=>null
}

export default Header