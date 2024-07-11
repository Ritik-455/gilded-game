import React from 'react'
import Gifearn from '../assets/images/GIF/Earn.gif'

const Earn = () => {
    return (
        <>
            <div className="container pb-[35px] sm:pb-[65px] md:pb-[80px] lg:pb-[110px]">
                <div className="flex flex-col-reverse md:flex-col md:items-center">
                    <h2 className=' font-Josefin font-bold text-[48px] leading-[61.2px] text-white text-center hidden md:block'>Play To <span className=' text-lightblue'>Earn</span></h2>
                    <p className=' font-Poppins font-normal text-[16px] leading-[25px] lg:text-[20px] md:leading-[26px] lg:leading-[32.9px] md:text-center max-w-[1024px] text-[#B2B2B2] mt-[16px]'>Gilded World will be the first game released by Gilded Games. It is an MMORPG, browser based game that is unlike any other. We have taken inspiration from some of the most popular and successful MMORPG and RPG games and have boiled it down to the best online gameplay that people will actually want to play!</p>
                    <h2 className=' font-Josefin font-bold text-[38px] leading-[46.2px] text-white md:text-center md:hidden mt-[20px]'>Play To <span className=' text-lightblue'>Earn</span></h2>
                    <div className="linear-border md:mt-[48px] relative after:[background:linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)border-box] after:absolute after:border-[2px] lg:after:border-[5px] after:border-transparent after:rounded-[13px] after:w-full after:inset-0 after:z-[0]"><img src={Gifearn} alt="Gifearn" className='xl:h-[561px] w-[1320px]' /></div>
                </div>
            </div>
        </>
    )
}

export default Earn