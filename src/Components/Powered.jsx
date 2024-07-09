import React from 'react'
import unreal from '../assets/images/SVG/unreal.svg'
import uniswap from '../assets/images/SVG/uniswap.svg'
import coin from '../assets/images/SVG/coin.svg'
import polygon from '../assets/images/SVG/polygon.svg'
import Slider from "react-slick";

const Powered = () => {
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
            <div className="container pt-[58px] pb-[47px] xl:pb-[192px]">
                <h3 className=' font-Josefin font-bold text-[48px] leading-[61.2px] text-white text-center'> <span className='bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] inline-block text-transparent bg-clip-text'>Powered </span>By:</h3>
                <div className="hidden xl:flex flex-wrap gap-[21px] mt-[68px]">
                    <div className="bg-custom-gradient border-[1px] border-[#393939] max-w-[312px] w-full rounded-[24px] flex justify-center py-[66px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_8px_35px#1BABFE] hover:border-[#8E78D3]">
                        <img src={unreal} alt="unreal" />
                    </div>
                    <div className="bg-custom-gradient border-[1px] border-[#393939] max-w-[312px] w-full rounded-[24px] flex justify-center py-[59px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_8px_35px#1BABFE] hover:border-[#8E78D3]">
                        <img src={uniswap} alt="uniswap" />
                    </div>
                    <div className="bg-custom-gradient border-[1px] border-[#393939] max-w-[312px] w-full rounded-[24px] flex justify-center py-[66px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_8px_35px#1BABFE] hover:border-[#8E78D3]">
                        <img src={coin} alt="coin" />
                    </div>
                    <div className="bg-custom-gradient border-[1px] border-[#393939] max-w-[312px] w-full rounded-[24px] flex justify-center py-[60px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_8px_35px#1BABFE] hover:border-[#8E78D3]">
                        <img src={polygon} alt="polygon" />
                    </div>
                </div>
                <div className=" xl:hidden">
                    <Slider {...settings} className=' mt-8'>
                        <div className="">
                            <div className="bg-custom-gradient border-[1px] border-[#393939] max-w-[312px] w-full rounded-[24px] flex justify-center lg:py-[66px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_8px_35px#1BABFE] hover:border-[#8E78D3] min-h-[216px]">
                                <img src={unreal} alt="unreal" />
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-custom-gradient border-[1px] border-[#393939] max-w-[312px] w-full rounded-[24px] flex justify-center lg:py-[59px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_8px_35px#1BABFE] hover:border-[#8E78D3] min-h-[216px]">
                                <img src={uniswap} alt="uniswap" />
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-custom-gradient border-[1px] border-[#393939] max-w-[312px] w-full rounded-[24px] flex justify-center lg:py-[66px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_8px_35px#1BABFE] hover:border-[#8E78D3] min-h-[216px]">
                                <img src={coin} alt="coin" />
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-custom-gradient border-[1px] border-[#393939] max-w-[312px] w-full rounded-[24px] flex justify-center lg:py-[60px] hover:bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] hover:drop-shadow-[0_8px_35px#1BABFE] hover:border-[#8E78D3] min-h-[216px]">
                                <img src={polygon} alt="polygon" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Powered