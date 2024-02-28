"use client";
import React, { useState } from "react";
import Carousel from "../../components/carousel/page";

const Products: React.FC = () => {
  let [page, setPage] = useState(0);

  let previous = () => {
    if (page === 0) setPage(0);
    else {
      setPage(page - 1);
      window.scrollTo({ top: 20, behavior: "smooth" });
    }
  };

  let next = () => {
    if (page === 2) setPage(2);
    else {
      setPage(page + 1);
      window.scrollTo({ top: 20, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col overflow-x-hidden pt-32">
      <div className="overflow-x-hidden flex flex-col justify-center content-center align-middle">
        <div className="flex justify-center content-center align-middle">
          <h1 className=" mx-auto p-10 text-center font-bold text-4xl ">
            Our Fire & Safety Product
          </h1>
        </div>
        <div className="flex flex-col mt-20">
          <Carousel page={page} />
        </div>
        <div className="flex mx-auto">
          <div className="flex flex-row w-[400px] justify-evenly align-middle mt-20 mb-24">
            <button
              className="flex w-16 h-16 border-2 border-[#75777A] rounded-md cursor-pointer pt-[18px] hover:bg-[#282A2C] hover:text-white"
              onClick={previous}
            >
              <img
                className="mx-auto"
                src="/l.svg"
                alt="previous page"
                width={24}
              />
            </button>
            <button
              className={`flex w-16 pl-[26px] pt-[17px] h-16 border-2 border-[#75777A] rounded-md text-lg font-extrabold cursor-pointer ${
                page === 0 ? "bg-black text-white" : "bg-white text-[#75777A]"
              }`}
              onClick={() => {
                setPage(0);
                window.scrollTo({ top: 20, behavior: "smooth" });
              }}
            >
              1
            </button>
            <button
              className={`flex w-16 pl-[26px] pt-[17px] h-16 border-2 border-[#75777A] rounded-md text-lg font-extrabold cursor-pointer ${
                page === 1 ? "bg-black text-white" : "bg-white text-[#75777A]"
              }`}
              onClick={() => {
                setPage(1);
                window.scrollTo({ top: 20, behavior: "smooth" });
              }}
            >
              2
            </button>
            <button
              className={`flex w-16 pl-[26px] pt-[17px] h-16 border-2 border-[#75777A] rounded-md text-lg font-extrabold cursor-pointer ${
                page === 2 ? "bg-black text-white" : "bg-white text-[#75777A]"
              }`}
              onClick={() => {
                setPage(2);
                window.scrollTo({ top: 20, behavior: "smooth" });
              }}
            >
              3
            </button>
            <button
              className="flex w-16 h-16 border-2 border-[#75777A] rounded-md cursor-pointer pt-[18px] hover:bg-[#282A2C] hover:text-white"
              onClick={next}
            >
              <img
                className="mx-auto"
                src="/r.svg"
                alt="previous page"
                width={24}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
