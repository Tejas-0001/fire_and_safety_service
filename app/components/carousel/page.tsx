import React from 'react';

interface Slide {
  n: string;
  d: string;
  f: string[];
  i:string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <div className='flex flex-col w-auto mx-auto'>
      {slides.map((slide, index) => (
        <div className={`flex ${ index % 2 === 0 ?'flex-row':'flex-row-reverse'} mt-10 justify-between`}>
          <div className="m-auto flex flex-col justify-center content-center align-middle p-8" key={index}>
            <div className="text-2xl font-bold">{slide.n}</div>
            <p className="text-[16px] text-[#75777A] mt-6 mb-6 max-w-[620px]">{slide.d}</p>
            <div className="flex flex-col">
              <h1 className="text-justify font-semibold text-[16px]">
                Features
              </h1>
              <div className="text-[#75777A] mt-6 mb-6 ">
                <ul role='list' className=" text-sm list-disc pl-5 space-y-3 max-w-[600px]">
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
};

export default Carousel