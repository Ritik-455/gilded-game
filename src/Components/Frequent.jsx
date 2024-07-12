import React from 'react'
import FooterSection from './FooterSection'
import Accordion from './Accordion'

const Frequent = () => {

    return (
        <>
            <div className="bg-[url(../src/assets/images/WEBP/bg-freq.webp)] bg-cover bg-center bg-no-repeat">
                <div className="container">
                    <h3 className=' font-Poppins font-bold text-[34px] leading-[43px] lg:text-[48px] lg:leading-[72px] text-white text-center'>Frequently Asked <span className=' bg-[linear-gradient(180deg,#815CC8_0%,#1BABFE_100%)] inline-block text-transparent bg-clip-text'> Questions</span></h3>
                    <div className=" mt-[35px] md:mt-[55px] lg:mt-[81px]"><Accordion/></div>
                    <FooterSection />
                </div>
                <div className="w-full border-[1px] border-[#191919] mt-[49px]"></div>
                <div className="flex gap-[18px] items-center pt-[8px] pb-[11px] justify-center">
                    <p className=' font-Josefin font-normal text-[16px] leading-[28.72px] text-[#999999]'>© Copyright $GILD 2024</p>
                    <div className="border-[0.7px] border-[#999999] h-[35px]"></div>
                    <p className=' font-Josefin font-normal text-[16px] leading-[28.72px] text-[#999999]'>Policy</p>
                </div>
            </div>
        </>
    )
}

export default Frequent