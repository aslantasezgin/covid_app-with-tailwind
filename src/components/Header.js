import React, { useState } from "react";
import Logo from "./Logo";


const Header = () => {


   

    return(
        <nav className="bg-gray-800 border-gray-200 px-2 py-2  ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Logo></Logo>

            </div>

        </nav>
    )
}


export default Header