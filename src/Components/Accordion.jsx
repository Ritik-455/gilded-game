import React, { useRef, useState } from "react";
import data from "../Common/Helper";
import { Arrowacc, Arrowacc2, ArrowRight } from "../Common/Icon";

//  accordionitem component
const AccordionItem = ({ heading, question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className=" overflow-hidden border-[1px] border-[#3E3E3E] max-w-[1038px] w-full rounded-[6px]  bg-[#131616bc]">
      <button
        className={` w-full text-left p-[16px_19px] flex items-center justify-between cursor-pointer ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <div className="flex gap-[12px]">
          <p className=" font-Montserrat font-normal text-[18px] leading-[21.94px] text-white">{question}</p>
          <p className=" font-Poppins font-normal text-[16px] md:text-[18px] leading-[23px] md:leading-[27px] text-white">{heading}</p>
        </div>
        <span>{isOpen ? <Arrowacc2 /> : <Arrowacc />}</span>
      </button>

      <div
        ref={contentHeight}
        className=" transition-all duration-300 ease-linear pl-[19px]"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className=" flex gap-[13px] items-center p-[8px_0px_16px_0px] ">
          <ArrowRight />
          <p className="answer-content font-poppins font-normal text-[16px] md:text-[18px] leading-[21px] md:leading-[28px] text-[#B6B6B6]">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" flex flex-col gap-[24px] items-center">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          heading={item.heading}
          answer={item.answer}
          question={item.question}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
