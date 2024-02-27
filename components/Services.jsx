import React from "react";

const Services = () => {
  return (
    <div className="w-auto h-auto flex flex-col m-auto p-5">
      <div className="flex flex-col m-5 p-5">
        <div>
          <div className="flex justify-center content-center align-middle">
            <h1 className=" m-x-auto p-10 text-center font-bold text-4xl ">
              Our Services
            </h1>
          </div>
          <div className="flex justify-center content-center align-middle">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
          </div>
        </div>
        {/* ek dbaab */}
        <div className="flex flex-row m-auto p-24 justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="justify-center content-center align-middle mx-auto">
                <img src="ph1.svg"></img>
              </div>
              <div className="flex flex-col justify-center align-middle mx-auto p-8">
                <h1 className="text-[16px] font-bold text-center min-w-[260px] mx-auto">
                  Fixing and Servicing of Sprinklers and Smoke Detectors
                </h1>
                <div>
                  <p className="mt-3  text-center ">
                    Lorem ipsum dolor sit amet consecte tur adipiscing elit
                    semper dalar cons elementum tempus hac.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="justify-center content-center align-middle mx-auto">
                <img src="ph2.svg"></img>
              </div>
              <div className="flex flex-col justify-center align-middle mx-auto p-8">
                <h1 className="text-[16px] font-bold  text-center min-w-[230px] mx-auto">
                  Fire Alarm Panel Repairing
                </h1>
                <div>
                  <p className="mt-3 text-center">
                    Lorem ipsum dolor sit amet consecte tur adipiscing elit
                    semper dalar cons elementum tempus hac.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <div className="justify-center content-center align-middle mx-auto">
                <img src="ph3.svg"></img>
              </div>
              <div className="flex flex-col justify-center align-middle mx-auto p-8">
                <h1 className="text-[16px] font-bold  text-center">
                  Refilling of Fire Extinguishers
                </h1>
                <div>
                  <p className="mt-3 text-center">
                    Lorem ipsum dolor sit amet consecte tur adipiscing elit
                    semper dalar cons elementum tempus hac.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <div className="justify-center content-center align-middle mx-auto">
                <img src="ph4.svg"></img>
              </div>
              <div className="flex flex-col justify-center align-middle mx-auto p-8">
                <h1 className="text-[16px] font-bold  text-center">
                  Fixing and Replacing Glasses of Shafts
                </h1>
                <div>
                  <p className="mt-3 text-center">
                    Lorem ipsum dolor sit amet consecte tur adipiscing elit
                    semper dalar cons elementum tempus hac.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Services;
