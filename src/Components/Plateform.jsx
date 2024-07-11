import React from 'react'
import bottomellips from '../assets/images/SVG/gilded-bottom-text-ellips.svg'
import topellips from '../assets/images/SVG/gilded-upper-text-ellips.svg'

const Plateform = () => {
    return (
        <>
            <div className="bg-[url(../src/assets/images/WEBP/bg-platform.webp)] bg-center bg-cover bg-no-repeat" id="about">
                <div className="container py-[55px] sm:py-[70px] md:py-[90px] lg:py-[120px] xl:py-[229px]">
                    <div className=" flex justify-center">
                        <div className=" relative">
                            <h3 className=' font-Josefin font-normal text-[19px] sm:text-[22px] sm:leading-[30px] md:text-[27px] md:leading-[32px] lg:text-[27px] xl:text-[40px] leading-[26.4px] lg:leading-[33px] xl:leading-[62.4px] text-white max-w-[940px] text-center'>Gilded Games is a new type of gaming platform, partially owned and operated by its players. Earn Gild tokens by playing and use them to decide the future of the game! </h3>
                            <div className="absolute right-[18%] bottom-[-20%] hidden xl:block">
                                <img src={bottomellips} alt="bottomellips" />
                            </div>
                            <div className="absolute left-[-9%] top-[-21%] hidden xl:block">
                                <img src={topellips} alt="bottomellips" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plateform