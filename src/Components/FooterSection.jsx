import React from 'react'
import logo from '../assets/images/SVG/logo.svg'
import { Discord2, Dots, Github, Reddit, Telegram, Twitter } from '../Common/icons'


const FooterSection = () => {
    return (
        <>

            <div className="row mt-[45px] md:mt-[75px] lg:mt-[125px] xl:mt-[226px]">
                <div className="col-12 sm:col-6 md:col-6 xl:col-8">
                    <img src={logo} alt="logo" className=' cursor-pointer' />
                    <p className=' font-Poppins font-normal text-[16px] leading-[28.72px] text-[#B6B7B7] max-w-[367px] mt-[11px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim.</p>
                    <div className="flex gap-[6px] mt-[27px]">
                        <a href="https://discord.com/" target='blank'>
                            <div className="w-[31.21px] h-[31.21px] border-[0.78px] border-[#404242] bg-custom-gradient flex justify-center items-center hover:translate-y-[-5px] transition-all duration-300 ease-linear">
                                <Discord2 />
                            </div>
                        </a>
                        <a href="https://x.com/?lang=en" target='blank'>
                            <div className="w-[31.21px] h-[31.21px] border-[0.78px] border-[#404242] bg-custom-gradient flex justify-center items-center hover:translate-y-[-5px] transition-all duration-300 ease-linear">
                                <Twitter />
                            </div>
                        </a>
                        <a href="https://telegram.org/" target='blank'>
                            <div className="w-[31.21px] h-[31.21px] border-[0.78px] border-[#404242] bg-custom-gradient flex justify-center items-center hover:translate-y-[-5px] transition-all duration-300 ease-linear">
                                <Telegram />
                            </div>
                        </a>
                        <a href="https://www.reddit.com/?rdt=65401" target='blank'>
                            <div className="w-[31.21px] h-[31.21px] border-[0.78px] border-[#404242] bg-custom-gradient flex justify-center items-center hover:translate-y-[-5px] transition-all duration-300 ease-linear">
                                <Dots />
                            </div>
                        </a>
                        <a href="https://www.reddit.com/?rdt=65401" target='blank'>
                            <div className="w-[31.21px] h-[31.21px] border-[0.78px] border-[#404242] bg-custom-gradient flex justify-center items-center hover:translate-y-[-5px] transition-all duration-300 ease-linear">
                                <Reddit />
                            </div>
                        </a>
                        <a href="https://github.com/" target='blank'>
                            <div className="w-[31.21px] h-[31.21px] border-[0.78px] border-[#404242] bg-custom-gradient flex justify-center items-center hover:translate-y-[-5px] transition-all duration-300 ease-linear">
                                <Github />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-6 sm:col-6 md:col-3 xl:col-2 sm:flex justify-center mt-8">
                    <ul>
                        <li className=' font-Josefin font-semibold text-[16px] leading-[28.72px] text-white'>About:</li>
                        <li className=' mt-[12px]'><a href="#about" className=' font-Josefin font-normal text-[16px] leading-[28.72px] text-[#B4B5B6] hover:text-white transition-all duration-300 ease-linear'>About Us</a></li>
                        <li className=' mt-[6px]'><a href="#career" className=' font-Josefin font-normal text-[16px] leading-[28.72px] text-[#B4B5B6] hover:text-white transition-all duration-300 ease-linear'>Career</a></li>
                        <li className=' mt-[6px]'><a href="#nodes" className=' font-Josefin font-normal text-[16px] leading-[28.72px] text-[#B4B5B6] hover:text-white transition-all duration-300 ease-linear'>Gilded Nodes</a></li>
                    </ul>
                </div>
                <div className="col-6 sm:col-12 md:col-3 xl:col-2 mt-8">
                    <ul>
                        <li className=' font-Josefin font-semibold text-[16px] leading-[28.72px] text-white'>Gilded Token:</li>
                        <li className=' mt-[12px]'><a href="#Etherscan" className=' font-Josefin font-normal text-[16px] leading-[28.72px] text-[#B4B5B6] hover:text-white transition-all duration-300 ease-linear'>Etherscan.io</a></li>
                        <li className=' mt-[6px]'><a href="#Github" className=' font-Josefin font-normal text-[16px] leading-[28.72px] text-[#B4B5B6] hover:text-white transition-all duration-300 ease-linear'>Github</a></li>
                        <li className=' mt-[6px]'><a href="#Uniswap" className=' font-Josefin font-normal text-[16px] leading-[28.72px] text-[#B4B5B6] hover:text-white transition-all duration-300 ease-linear'>Uniswap</a></li>
                    </ul>
                </div>
            </div>
        </>
    )

}

export default FooterSection