import React from 'react'
import girl from '../assets/images/WEBP/utility.webp'
const Utility = () => {
    return (
        <> 

            <div className="bg-[url(../src/assets/images/WEBP/bg-utility.webp)] bg-no-repeat bg-cover bg-center mt-[-2px]">
                <div className="container pt-[20px] lg:pt-[123px] pb-[35px] lg:pb-[194px]">
                    <div className="row flex-col-reverse md:flex-row">
                        <div className="col-12 md:col-7 flex items-center">
                            <div className="">
                                <h3 className=' font-Josefin font-bold text-[38px] lg:text-[48px] leading-[46px] lg:leading-[61.2px] text-white'><span className='text-[#7267CF]'>NFT</span> Utility</h3>
                                <p className=' font-Poppins font-normal text-[16px] xl:text-[20px] leading-[25px] xl:leading-[35.9px] text-white opacity-70 max-w-[649px] mt-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim. Volutpat placerat volutpat commodo id ultricies volutpat vestibulum. Egestas venenatis dignissim fames maecenas. Blandit orci consectetur mauris, ipsum viverra quisque. Vulputate sollicitudin tellus eget consequat lectus dignissim integer in vitae. Commodo integer dis tortor cras maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat molestie nibh parturient lectus magna sed fusce diam urna. Quam magna duis imperdiet posuere iaculis.</p>
                            </div>
                        </div>
                        <div className="col-12 md:col-5 flex justify-center">
                            <img className='h-[450px] lg:h-[500px] xl:h-[638px]' src={girl} alt="girl" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Utility