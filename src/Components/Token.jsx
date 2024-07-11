import React from 'react'
import Slider from "react-slick";
import Box from '../assets/images/SVG/box.svg';
import Handimg from '../assets/images/SVG/token.svg';
import Holder from '../assets/images/SVG/holder.svg'
import NFT from '../assets/images/SVG/NFT.svg'

const Token = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 3000,
        autoplaySpeed: 0,
        slidesToShow: 3,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="bg-[url(../src/assets/images/WEBP/bg-token.webp)] bg-center bg-cover bg-no-repeat" id="staking">
                <div className="container py-[50px] xl:py-[133px]">
                    <h3 className=' font-Josefin font-bold text-[32px] leading-[40px] lg:text-[48px] lg:leading-[61.2px] text-white text-center'><span className='bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] inline-block text-transparent bg-clip-text'>$GILD</span> Token Info</h3>
                    <div className=" xl:flex gap-[24px] mt-[59px] hidden">
                        <div className=" max-w-[312px] w-full bg-custom-gradient linear-border relative after:[background:linear-gradient(180deg,#ffffff33_0%,#ffffff1a_100%)border-box] after:absolute after:border-[1px] after:border-transparent after:rounded-[13px] after:w-full after:inset-0 after:z-[0]  rounded-[13px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_8px_35px#1BABFE] hover:border-[#8E78D3]">
                            <div className=" flex flex-col items-center pt-[24px] pb-[17px]">
                                <img src={Box} alt="Box" />
                                <p className=' font-Josefin font-bold text-[30px] leading-[38.25px] text-white mt-[9px]'>3 BIllion</p>
                                <p className=' font-Josefin font-normal text-[18px] leading-[22.95px] text-white'>GILD Token Info</p>
                            </div>
                        </div>
                        <div className=" max-w-[312px] w-full bg-custom-gradient linear-border relative after:[background:linear-gradient(180deg,#ffffff33_0%,#ffffff1a_100%)border-box] after:absolute after:border-[1px] after:border-transparent after:rounded-[13px] after:w-full after:inset-0 after:z-[0]  rounded-[13px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_8px_35px#1BABFE] hover:border-[#8E78D3]">
                            <div className=" flex flex-col items-center pt-[24px] pb-[17px]">
                                <img src={Handimg} alt="Handimg" />
                                <p className=' font-Josefin font-bold text-[30px] leading-[38.25px] text-white mt-[9px]'>Pre Sale Token</p>
                            </div>
                        </div>
                        <div className=" max-w-[312px] w-full bg-custom-gradient linear-border relative after:[background:linear-gradient(180deg,#ffffff33_0%,#ffffff1a_100%)border-box] after:absolute after:border-[1px] after:border-transparent after:rounded-[13px] after:w-full after:inset-0 after:z-[0]  rounded-[13px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_8px_35px#1BABFE] hover:border-[#8E78D3]">
                            <div className=" flex flex-col items-center pt-[24px] pb-[17px]">
                                <img src={Holder} alt="Holder" />
                                <p className=' font-Josefin font-bold text-[30px] leading-[38.25px] text-white mt-[9px]'>100,000+</p>
                                <p className=' font-Josefin font-normal text-[18px] leading-[22.95px] text-white'>Holders</p>
                            </div>
                        </div>
                        <div className=" max-w-[312px] w-full bg-custom-gradient linear-border relative after:[background:linear-gradient(180deg,#ffffff33_0%,#ffffff1a_100%)border-box] after:absolute after:border-[1px] after:border-transparent after:rounded-[13px] after:w-full after:inset-0 after:z-[0]  rounded-[13px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_0px_30px#1BABFE] hover:border-[#8E78D3]">
                            <div className=" flex flex-col items-center pt-[24px] pb-[17px]">
                                <img src={NFT} alt="NFT" />
                                <p className=' font-Josefin font-bold text-[30px] leading-[38.25px] text-white mt-[9px]'>2,500+</p>
                                <p className=' font-Josefin font-normal text-[18px] leading-[22.95px] text-white'>NFT Sold</p>
                            </div>
                        </div>
                    </div>
                    <div className=" xl:hidden">
                        <Slider {...settings} className=' mt-[30px] lg:mt-[58px]'>
                            <div className="">
                                <div className=" max-w-[312px] w-full bg-custom-gradient border-[1px] border-[#4A4A4A]  rounded-[16px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_8px_35px#1BABFE] hover:border-[#8E78D3] min-h-[181px]">
                                    <div className=" flex flex-col items-center pt-3 lg:pt-[24px] lg:pb-[17px]">
                                        <img src={Box} alt="Box" />
                                        <p className=' font-Josefin font-bold text-[30px] leading-[38.25px] text-white mt-[9px]'>3 BIllion</p>
                                        <p className=' font-Josefin font-normal text-[18px] leading-[22.95px] text-white'>GILD Token Info</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className=" max-w-[312px] w-full bg-custom-gradient border-[1px] border-[#4A4A4A]  rounded-[16px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_8px_35px#1BABFE] hover:border-[#8E78D3] min-h-[181px]">
                                    <div className=" flex flex-col items-center pt-3 lg:pt-[24px] lg:pb-[17px]">
                                        <img src={Handimg} alt="Handimg" />
                                        <p className=' font-Josefin font-bold text-[30px] leading-[38.25px] text-white mt-[9px]'>Pre Sale Token</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className=" max-w-[312px] w-full bg-custom-gradient border-[1px] border-[#4A4A4A]  rounded-[16px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_8px_35px#1BABFE] hover:border-[#8E78D3] min-h-[181px]">
                                    <div className=" flex flex-col items-center pt-3 lg:pt-[24px] lg:pb-[17px]">
                                        <img src={Holder} alt="Holder" />
                                        <p className=' font-Josefin font-bold text-[30px] leading-[38.25px] text-white mt-[9px]'>100,000+</p>
                                        <p className=' font-Josefin font-normal text-[18px] leading-[22.95px] text-white'>Holders</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className=" max-w-[312px] w-full bg-custom-gradient border-[1px] border-[#4A4A4A]  rounded-[16px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_0px_30px#1BABFE] hover:border-[#8E78D3] min-h-[181px]">
                                    <div className=" flex flex-col items-center pt-3 lg:pt-[20px] lg:pb-[13px]">
                                        <img src={NFT} alt="NFT" />
                                        <p className=' font-Josefin font-bold text-[30px] leading-[38.25px] text-white mt-[9px]'>2,500+</p>
                                        <p className=' font-Josefin font-normal text-[18px] leading-[22.95px] text-white'>NFT Sold</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>

    )


}

export default Token