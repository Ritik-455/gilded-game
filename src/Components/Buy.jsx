import React from 'react'
import Woodenbox from '../assets/images/WEBP/box-img.webp'
import { Horse } from '../Common/icons'

const Buy = () => {
    return (
        <>
            <div className="bg-[url(../src/assets/images/WEBP/bg-buy.webp)] bg-center bg-cover bg-no-repeat">
                <div className="container py-[37px] md:py-[146px] xl:pt-[300px] xl:pb-[230px]">
                    <div className="row flex-col-reverse md:flex-row">
                        <div className="col-12 md:col-6 mt-[25px] md:mt-0" data-aos="fade-up">
                            <h3 className=' font-Josefin font-bold text-[34px] md:text-[40px] lg:text-[48px] leading-[45.2px] md:leading-[61.2px] text-white'>Buy On <span className=' text-lightblue'> Uniswap</span></h3>
                            <ul className=' list-disc font-Josefin font-normal text-[20px] leading-[25.5px] text-white ml-4 mt-[21px]'>
                                <li>100,000+ Airdrop</li>
                                <li className=' mt-[11px]'>NFT $GILD giveaway</li>
                                <li className=' mt-[11px]'>Announcement and Games</li>
                            </ul>
                            <button className=' group relative overflow-hidden transition-all duration-300 ease-out font-Josefin font-normal text-[19px] lg:text-[24px] leading-[24px] text-white p-[14px_34px] bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] drop-shadow-[0_8px_35px#1BABFE] rounded-[80px] mt-[21px] md:mt-[41px]'>
                                <span class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-[12rem]"></span>
                                <span class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-[12rem]"></span>
                                <span className='flex gap-[10px] relative'><Horse />Presale</span></button>
                        </div>
                        <div className="col-12 md:col-6 flex justify-center" data-aos="fade-down">
                            <img className=' w-[262px] sm:w-auto' src={Woodenbox} alt="Box" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buy