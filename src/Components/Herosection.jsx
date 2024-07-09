import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Presalelogo } from '../Common/icon';

const Herosection = () => {
    const initialTime = { days: 19, hours: 10, minutes: 2, seconds: 55 };

    const [timeLeft, setTimeLeft] = useState(initialTime);
    useEffect(() => {
        const countdown = setInterval(() => {
            if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
                clearInterval(countdown);
            } else {
                if (timeLeft.seconds > 0) {
                    setTimeLeft(prevTime => ({
                        ...prevTime,
                        seconds: prevTime.seconds - 1
                    }));
                } else {
                    if (timeLeft.minutes > 0) {
                        setTimeLeft(prevTime => ({
                            ...prevTime,
                            minutes: prevTime.minutes - 1,
                            seconds: 59
                        }));
                    } else {
                        if (timeLeft.hours > 0) {
                            setTimeLeft(prevTime => ({
                                ...prevTime,
                                hours: prevTime.hours - 1,
                                minutes: 59,
                                seconds: 59
                            }));
                        } else {
                            setTimeLeft(prevTime => ({
                                days: prevTime.days - 1,
                                hours: 23,
                                minutes: 59,
                                seconds: 59
                            }));
                        }
                    }
                }
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [timeLeft]);
    return (
        <>
            <div className="bg-[url(../src/assets/images/WEBP/bg-hero.webp)] min-h-screen bg-center bg-cover bg-no-repeat flex flex-col">
                <Header />
                <div className="container flex flex-grow items-center justify-center">
                    <div className="">
                        <h2 className=' font-Poppins font-normal text-[25px] sm:text-[32px] sm:leading-[37px] md:text-[43px] md:leading-[46px] lg:text-[60px] xl:text-[69px] 2xl:text-[72px] leading-[32px] lg:leading-[55px] xl:leading-[91.8px] text-white text-center max-w-[1200px]'>There are games... And then
                            there are <span className=' text-lightblue'>Gilded</span> Games</h2>
                        <div className="flex gap-[5px] justify-center mt-[20px]">
                            <p className=' font-Josefin font-semibold text-[29px] lg:text-[36px] lh-[45.9px] text-lightblue'>{timeLeft.days}d :</p>
                            <p className=' font-Josefin font-semibold text-[29px] lg:text-[36px] lh-[45.9px] text-white'>{timeLeft.hours}hr :</p>
                            <p className=' font-Josefin font-semibold text-[29px] lg:text-[36px] lh-[45.9px] text-white'>{timeLeft.minutes}min :</p>
                            <p className=' font-Josefin font-semibold text-[29px] lg:text-[36px] lh-[45.9px] text-white'>{timeLeft.seconds}sec</p>
                        </div>
                        <p className=' font-Josefin text-[18px] leading-[22.95px] text-white text-center'>Remaining Presale Time</p>
                        <div className="gap-[23px] flex justify-center mt-[22px]">
                            <button className=' font-Josefin font-normal text-[19px] lg:text-[24px] leading-[24px] text-white p-[14px_34px] bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] drop-shadow-[0_8px_35px#1BABFE] rounded-[80px]'><span className='flex gap-[10px]'><Presalelogo />Presale</span></button>
                            <button className=' font-Josefin font-normal text-[19px] lg:text-[24px] leading-[24px] text-white p-[14px_34px] border-[1px] border-white rounded-[79px]'>Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Herosection