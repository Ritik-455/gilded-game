import React from 'react'
import logo from '../assets/images/SVG/logo.svg'
import { Discord2, Dots, Github, Reddit, Telegram, Twitter } from '../Common/icon'

const FooterSection = () => {
    return (
        <>
            <div className="row mt-[226px]">
                <div className="col-12 sm:col-6 md:col-6 xl:col-8">
                    <img src={logo} alt="logo" />
                    <p className=' font-Poppins font-normal text-[16px] leading-[28.72px] text-[#B6B7B7] max-w-[367px] mt-[11px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim.</p>
                    <div className="flex gap-[6px] mt-[27px]">
                        <div className="w-[31.21px] h-[31.21px] border-[0.78px] border-[#404242] bg-custom-gradient flex justify-center items-center">
                            <Discord2 />
                        </div>
                        <div className="w-[31.21px] h-[31.21px] border-[0.78px] border-[#404242] bg-custom-gradient flex justify-center items-center">
                            <Twitter />
                        </div>
                        <div className="w-[31.21px] h-[31.21px] border-[0.78px] border-[#404242] bg-custom-gradient flex justify-center items-center">
                            <Telegram />
                        </div>
                        <div className="w-[31.21px] h-[31.21px] border-[0.78px] border-[#404242] bg-custom-gradient flex justify-center items-center">
                            <Dots />
                        </div>
                        <div className="w-[31.21px] h-[31.21px] border-[0.78px] border-[#404242] bg-custom-gradient flex justify-center items-center">
                            <Reddit />
                        </div>
                        <div className="w-[31.21px] h-[31.21px] border-[0.78px] border-[#404242] bg-custom-gradient flex justify-center items-center">
                            <Github />
                        </div>
                    </div>
                </div>
                <div className="col-6 sm:col-6 md:col-3 xl:col-2 sm:flex justify-center mt-8">
                    <ul>
                        <li className=' font-Josefin font-semibold text-[16px] leading-[28.72px] text-white'>About:</li>
                        <li className=' mt-[12px]'><a href="" className=' font-Josefin font-normal text-[16px] leading-[28.72px] text-[#B4B5B6]'>About Us</a></li>
                        <li className=' mt-[6px]'><a href="" className=' font-Josefin font-normal text-[16px] leading-[28.72px] text-[#B4B5B6]'>Career</a></li>
                        <li className=' mt-[6px]'><a href="" className=' font-Josefin font-normal text-[16px] leading-[28.72px] text-[#B4B5B6]'>Gilded Nodes</a></li>
                    </ul>
                </div>
                <div className="col-6 sm:col-12 md:col-3 xl:col-2 mt-8">
                    <ul>
                        <li className=' font-Josefin font-semibold text-[16px] leading-[28.72px] text-white'>Gilded Token:</li>
                        <li className=' mt-[12px]'><a href="" className=' font-Josefin font-normal text-[16px] leading-[28.72px] text-[#B4B5B6]'>Etherscan.io</a></li>
                        <li className=' mt-[6px]'><a href="" className=' font-Josefin font-normal text-[16px] leading-[28.72px] text-[#B4B5B6]'>Github</a></li>
                        <li className=' mt-[6px]'><a href="" className=' font-Josefin font-normal text-[16px] leading-[28.72px] text-[#B4B5B6]'>Uniswap</a></li>
                    </ul>
                </div>
            </div>
        </>
    )

}

export default FooterSection