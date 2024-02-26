"use client";
import React, { useState } from "react";
import Dropdown from "../Dropdown";

const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  return (
    <div className="flex justify-center content-center w-auto bg-[#F7F8FB] align-middle">
      <div className="flex flex-col justify-center content-center align-middle w-auto mt-24 mb-9">
        <div className="flex justify-center content-center w-auto h-28 text-5xl font-semibold">
          Frequently Asked Questions
        </div>
        <div className="flex flex-col justify-center content-center align-middle overflow-y-auto">
          <div className="relative flex flex-col items-center w-auto">
            <button
              onClick={() => setIsOpen1((prev) => !prev)}
              className="bg-white p-4 w-[1136px] flex items-center justify-between font-semibold text-md rounded-lg active:rounded-t-lg"
            >
              How does TanahAir create website content without knowing our
              Business plan
              {!isOpen1 ? <img src="/d1.svg" /> : <img src="/d2.svg" />}
            </button>

            {isOpen1 && (
              <div className="relative w-[1136px] flex flex-col items-start rounded-xl">
                <div className="bg-white rounded-b-xl">
                  <h3 className="m-4 text-[#75777A]">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat aute irure
                    sint amet occaecat cupidatat non proident
                  </h3>
                </div>
              </div>
            )}
          </div>
          <div className="relative flex flex-col items-center w-auto mt-3">
            <button
              onClick={() => setIsOpen2((prev) => !prev)}
              className="bg-white p-4 w-full flex items-center justify-between font-semibold text-md rounded-lg active:rounded-t-lg"
            >
              How does TanahAir create website content without knowing our
              Business plan
              {!isOpen2 ? <img src="/d1.svg" /> : <img src="/d2.svg" />}
            </button>

            {isOpen2 && (
              <div className="relative w-[1136px] flex flex-col items-start rounded-xl">
                <div className="bg-white rounded-xl">
                  <h3 className="m-4 text-[#75777A]">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat aute irure
                    sint amet occaecat cupidatat non proident
                  </h3>
                </div>
              </div>
            )}
          </div>
          <div className="relative flex flex-col items-center w-auto mt-3">
            <button
              onClick={() => setIsOpen3((prev) => !prev)}
              className="bg-white p-4 w-full flex items-center justify-between font-semibold text-md rounded-lg active:rounded-t-lg"
            >
              How does TanahAir create website content without knowing our
              Business plan
              {!isOpen3 ? <img src="/d1.svg" /> : <img src="/d2.svg" />}
            </button>

            {isOpen3 && (
              <div className="relative w-[1136px] flex flex-col items-start rounded-xl">
                <div className="bg-white rounded-xl">
                  <h3 className="m-4 text-[#75777A]">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat aute irure
                    sint amet occaecat cupidatat non proident
                  </h3>
                </div>
              </div>
            )}
          </div>
          <div className="relative flex flex-col items-center w-auto mt-3">
            <button
              onClick={() => setIsOpen4((prev) => !prev)}
              className="bg-white p-4 w-full flex items-center justify-between font-semibold text-md rounded-lg active:rounded-t-lg"
            >
              How does TanahAir create website content without knowing our
              Business plan
              {!isOpen4 ? <img src="/d1.svg" /> : <img src="/d2.svg" />}
            </button>

            {isOpen4 && (
              <div className="relative w-[1136px] flex flex-col items-start rounded-xl">
                <div className="bg-white rounded-xl">
                  <h3 className="m-4 text-[#75777A]">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat aute irure
                    sint amet occaecat cupidatat non proident
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
