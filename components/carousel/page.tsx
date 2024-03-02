"use client";
import React from "react";
import list1 from "../../app/page1.json";
import list2 from "../../app/page2.json";
import list3 from "../../app/page3.json";

interface Slide {
  n: string;
  d: string;
  f: string[];
  i: string;
}

interface CarouselProps {
  page: number;
}

function Carousel({ page }: { page: number }) {
  const items: Slide[][] = [list1, list2, list3];
  const slides = items[page];
  return (
    <div className="flex flex-col w-auto mx-auto px-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } mt-10 justify-between`}
        >
          <div
            className="m-auto flex flex-col justify-center content-center align-middle p-8"
            key={index}
          >
            <div className="text-2xl font-bold">{slide.n}</div>
            <p className="text-[16px] text-[#75777A] mt-6 mb-6 max-w-[620px]">
              {slide.d}
            </p>
            <div className="flex flex-col">
              <h1 className="text-justify font-semibold text-[16px]">
                Features
              </h1>
              <div className="text-[#75777A] mt-6 mb-6 ">
                <ul
                  role="list"
                  className=" text-sm list-disc pl-5 space-y-3 max-w-[600px]"
                >
                  {slide.f.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#F3F5F7] max-w-[452px] p-20 m-auto">
            <img src={slide.i}></img>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
