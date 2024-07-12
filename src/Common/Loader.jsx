import React from 'react'
import logo from '../assets/images/SVG/logo.svg'
const Loader = () => {
    return (
        <>
            <div className="h-screen w-full bg-black flex justify-center items-center flex-col">
               <div className=" animate-bounce"><img src={logo} alt="logo" /></div>
            </div>
        </>
    )
}

export default Loader