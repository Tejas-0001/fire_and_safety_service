import React from "react";
import Image from "next/image";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative flex max-w-[1136px] h-[648px] bg-white">
        <div className="flex justify-between mt-20 ml-32 w-auto h-[468px]">
          <div className="w-[500px] mt-20 gap-5">
            <div className="text-5xl font-bold font-Satoshi tracking-[-3%] leading-[3rem]">
              Start Your Journey with us now
            </div>
            <p className="text-[#75777A] mt-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure sint amet{" "}
            </p>
            <div className="mt-10">
              <div className="text-xl font-semibold">Contact Information</div>
              <div className="mt-[32px]">
                <div className="flex flex-row w-[420px]">
                  <img
                    src="/loc.svg"
                    width={24}
                    height={24}
                    alt="location"
                  ></img>
                  <p className="text-[#75777A] ml-4">
                    Unicare Fire Safety (India) Pvt. Ltd.C-34, Sector 65,
                    Noida-201301, Delhi (NCR), (U.P).
                  </p>
                </div>
                <div className="flex flex-row w-[420px] mt-3">
                  <img
                    src="/phone.svg"
                    width={24}
                    height={24}
                    alt="phone"
                  ></img>
                  <p className="text-[#75777A] ml-4">+44 16 8765 1098</p>
                </div>
                <div className="flex flex-row w-[420px] mt-3">
                  <img src="/mail.svg" width={24} height={24} alt="mail"></img>
                  <p className="text-[#75777A] ml-4">dummycompany@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[540px] mt-[40px] ml-60 ">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
