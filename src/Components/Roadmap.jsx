import React from 'react'
import line from '../assets/images/SVG/dashed-line.svg'

const Roadmap = () => {
    return (
        <>
            <div className=" overflow-hidden">
                <div className="container pt-[92px] pb-[75px] relative">
                    <h2 className=' font-Josefin font-bold text-[48px] leading-[61.2px] text-white text-center'><span className='bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] inline-block text-transparent bg-clip-text'>Road</span>map</h2>
                    <div className="hidden lg:block">
                        <hr className='max-w-[975px] w-full border-[2px] border-[#333333] mt-[128px]' />
                        <div className="absolute top-[37%] left-0">
                            <div className="w-[65px] h-[62px] bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] rounded-[50%] drop-shadow-[0_0px_15px#1BABFE] "></div>
                        </div>
                        <div className="absolute top-[37%] left-[36%]">
                            <div className="w-[65px] h-[62px] bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] rounded-[50%] drop-shadow-[0_0px_15px#1BABFE] "></div>
                        </div>
                        <div className="absolute top-[37%] right-[23%]">
                            <div className="w-[65px] h-[62px] bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] rounded-[50%] drop-shadow-[0_0px_15px#1BABFE] "></div>
                        </div>
                        <div className="absolute right-[-25%] hidden 2xl:block">
                            <img src={line} alt="line" />
                        </div>
                        <div className=" flex justify-between 2xl:row 2xl:justify-start">
                            <div className=" 2xl:col-3">
                                <p className=' font-Poppins font-semibold text-[18px] leading-[23.33px] text-white mt-[69px]'>Phase 1</p>
                                <p className=' font-Poppins font-semibold text-[36px] leading-[46.44px] text-white'>Q1 2022</p>
                                <div className=" flex gap-[15px] items-center mt-[12px]">
                                    <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                    <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Whitelist/Presale Created</p>
                                </div>
                                <div className=" flex gap-[15px] items-center mt-[12px]">
                                    <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                    <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Private Sale</p>
                                </div>
                                <div className=" flex gap-[15px] items-center mt-[12px]">
                                    <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                    <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Public Sale</p>
                                </div>
                                <div className=" flex gap-[15px] items-center mt-[12px]">
                                    <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                    <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Prime Eternal Owner Perks </p>
                                </div>
                            </div>
                            <div className=" 2xl:col-5 flex justify-center">
                                <div className="">
                                    <p className=' font-Poppins font-semibold text-[18px] leading-[23.33px] text-white mt-[69px]'>Phase 2</p>
                                    <p className=' font-Poppins font-semibold text-[36px] leading-[46.44px] text-white'>Q2 2022</p>
                                    <div className=" flex gap-[15px] items-center mt-[12px]">
                                        <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                        <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Whitelist/Presale Created</p>
                                    </div>
                                    <div className=" flex gap-[15px] items-center mt-[12px]">
                                        <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                        <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Private Sale</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" 2xl:col-3 flex justify-end">
                                <div className="">
                                    <p className=' font-Poppins font-semibold text-[18px] leading-[23.33px] text-white mt-[69px]'>Phase 3</p>
                                    <p className=' font-Poppins font-semibold text-[36px] leading-[46.44px] text-white'>Q3 2022</p>
                                    <div className=" flex gap-[15px] items-center mt-[12px]">
                                        <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                        <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>MVP Gameplay Release </p>
                                    </div>
                                    <div className=" flex gap-[15px] items-center mt-[12px]">
                                        <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                        <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Battle Modes Release</p>
                                    </div>
                                    <div className=" flex gap-[15px] items-center mt-[12px]">
                                        <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                        <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Land Gameplay Release</p>
                                    </div>
                                    <div className=" flex gap-[15px] items-center mt-[12px]">
                                        <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                        <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Gear Forging Release</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-[36px] lg:hidden'>
                        <div class="relative pl-[75px] group">
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:sm:h-[275px] before:md:h-[274px] before:h-[260px] before:border-[1px]  before:border-[#333333] before:bg-[#333333] sm:before:ml-[1rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-[32px] after:h-[32px] after:md:w-[53px] after:sm:top-[1%] after:top-[1%] after:md:h-[53px] after:bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)]  after:rounded-full sm:after:ml-[1rem] after:-translate-x-1/2 after:translate-y-1.5 after:drop-shadow-[0_0px_15px#1BABFE]">
                            </div>
                            <p className=' font-Poppins font-semibold text-[15px] md:text-[18px] leading-[23.33px] text-white'>Phase 1</p>
                            <p className=' font-Poppins font-semibold text-[26px] md:text-[36px] leading-[46.44px] text-white'>Q1 2022</p>
                            <div className=" flex gap-[15px] items-center mt-[12px]">
                                <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Whitelist/Presale Created</p>
                            </div>
                            <div className=" flex gap-[15px] items-center mt-[6px] md:mt-[12px]">
                                <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Private Sale</p>
                            </div>
                            <div className=" flex gap-[15px] items-center mt-[6px] md:mt-[12px]">
                                <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Public Sale</p>
                            </div>
                            <div className=" flex gap-[15px] items-center mt-[6px] md:mt-[12px]">
                                <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Prime Eternal Owner Perks </p>
                            </div>
                        </div>

                        <div class="relative pl-[75px]  pt-[10px] group">
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:sm:h-[300px] before:md:h-[310px] before:h-[246px] before:border-[1px]  before:border-[#333333] before:bg-[#333333] sm:before:ml-[1rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-[32px] after:h-[32px] after:md:w-[53px] after:md:h-[53px] after:bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)]  after:rounded-full sm:after:ml-[1rem] after:-translate-x-1/2 after:sm:top-[42%] after:top-[23%] after:translate-y-1.5 after:drop-shadow-[0_0px_15px#1BABFE]">
                            </div>
                            <p className=' font-Poppins font-semibold text-[15px] md:text-[18px] leading-[23.33px] text-white mt-[46px] md:mt-[69px]'>Phase 2</p>
                            <p className=' font-Poppins font-semibold text-[26px] md:text-[36px] leading-[46.44px] text-white'>Q2 2022</p>
                            <div className=" flex gap-[15px] items-center mt-[6px] md:mt-[12px]">
                                <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Whitelist/Presale Created</p>
                            </div>
                            <div className=" flex gap-[15px] items-center mt-[6px] md:mt-[12px]">
                                <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Private Sale</p>
                            </div>
                        </div>
                        <div class="relative pl-[75px]  py-[10px] group">
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:sm:h-[74px] before:h-full before:border-[2px]  before:border-[#333333] before:bg-[#333333] sm:before:ml-[1rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:md:w-[53px] after:w-[32px] after:h-[32px] after:md:h-[53px] after:bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)]  after:rounded-full sm:after:ml-[1rem] after:sm:top-[24%] after:top-[13%] after:-translate-x-1/2 after:translate-y-1.5 after:drop-shadow-[0_0px_15px#1BABFE]">
                            </div>
                            <p className=' font-Poppins font-semibold text-[15px] md:text-[18px] leading-[23.33px] text-white mt-[46px] md:mt-[69px]'>Phase 3</p>
                            <p className=' font-Poppins font-semibold text-[26px] md:text-[36px] leading-[46.44px] text-white'>Q3 2022</p>
                            <div className=" flex gap-[15px] items-center mt-[6px] md:mt-[12px]">
                                <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>MVP Gameplay Release </p>
                            </div>
                            <div className=" flex gap-[15px] items-center mt-[6px] md:mt-[12px]">
                                <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Battle Modes Release</p>
                            </div>
                            <div className=" flex gap-[15px] items-center mt-[6px] md:mt-[12px]">
                                <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Land Gameplay Release</p>
                            </div>
                            <div className=" flex gap-[15px] items-center mt-[6px] md:mt-[12px]">
                                <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                <p className=' font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc'>Gear Forging Release</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap