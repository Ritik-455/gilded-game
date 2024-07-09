import React, { useState } from 'react'
import logo from '../assets/images/SVG/logo.svg'
import { Discordlogo, Navcross, Navline } from '../Common/icon'

const Header = () => {
  const [show, setfirst] = useState(false);

  if (show === true) {
    document.body.classList.add('overflow_hidden')
  }
  else {
    document.body.classList.remove('overflow_hidden')
  }
  return (
    <>
      <div className="w-full bg-[#0000001A] py-[19px]">
        <div className="container">
          <nav className=' flex justify-between items-center'>
            <img className='w-[186px] md:w-auto cursor-pointer' src={logo} alt="logo" />
            <div className="flex gap-[29px]">
              <ul className={`${show ? "right_0" : "right_100"} flex items-center gap-[40px] xl:gap-[20px] 2xl:gap-[40px] mobile-view`}>
                <li><a href="sdf" className=' font-Josefin font-normal text-[22px] leading-[22px] xl:text-[18px] 2xl:text-[22px] text-white'>About</a></li>
                <li><a href="sdf" className=' font-Josefin font-normal text-[22px] leading-[22px] xl:text-[18px] 2xl:text-[22px] text-white'>Presale $GILD</a></li>
                <li><a href="sd" className=' font-Josefin font-normal text-[22px] leading-[22px] xl:text-[18px] 2xl:text-[22px] text-white'>Staking $GILD</a></li>
                <li><a href="sdf" className=' font-Josefin font-normal text-[22px] leading-[22px] xl:text-[18px] 2xl:text-[22px] text-white'>$GILD Nodes</a></li>
                <button className=' font-Josefin font-normal text-[24px] leading-[24px] text-white p-[14px_34px] bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] drop-shadow-[0_8px_35px#1BABFE] rounded-[80px] xl:hidden'><span className="flex gap-[10px] items-center"><Discordlogo/>Discord</span></button>
              </ul>
              <button className=' font-Josefin font-normal text-[24px] leading-[24px] text-white p-[14px_34px] bg-[linear-gradient(149.67deg,#815CC8_29.44%,#1BABFE_81.54%)] drop-shadow-[0_8px_35px#1BABFE] rounded-[80px] hidden xl:block '><span className="flex gap-[10px] items-center"><Discordlogo/>Discord</span></button>
            </div>
            <div className="z-5 xl:hidden " onClick={() => {
              setfirst(!show);
            }}>
              <span>{show === false ? <Navline /> : <Navcross />}</span>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}


export default Header