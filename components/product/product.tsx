import React from 'react'
import Image from 'next/image'
const Product = () => {
    return (
        <div className='relative flex flex-col content-center w-full h-[1004px]'>
            <div className='flex flex-col content-center justify-center align-middle'>
                <div className='text-5xl font-semibold mt-20 ml-[620px] tracking-[-10%] leading-[3rem]'>Our Products</div>
                <div className='w-[1280px] h-[584px] flex flex-row justify-evenly mt-20 ml-32'>
                    <div className='w-[352px] h-[584px]'>
                        <img src="p1.svg" alt="fire extinguisher" />
                        <div className='mt-4'>
                            <p className='text-xl font-semibold pt-4'>ABC Stored Pressure Type Fire Extinguisher</p>
                            <p className='text-[#75777A] pt-3'>The devices within a fire pump controller panel perform such functions as receiving signals from alarm devices, such as pressure operated switches, sprinkler alarm valves or remote fire alarm equipment; activating motor control devices to provide electric power to motors driving fire pumps and monitoring the fire pump</p>
                        </div>
                    </div>
                    <div className='w-[352px] h-[584px]'>
                        <img src="p2.svg" alt="fire extinguisher" />
                        <div className='mt-4'>
                            <p className='text-xl font-semibold pt-4'>ABC Stored Pressure Type Fire Extinguisher</p>
                            <p className='text-[#75777A] pt-3'>The devices within a fire pump controller panel perform such functions as receiving signals from alarm devices, such as pressure operated switches, sprinkler alarm valves or remote fire alarm equipment; activating motor control devices to provide electric power to motors driving fire pumps and monitoring the fire pump</p>
                        </div>
                    </div>
                    <div className='w-[352px] h-[584px]'>
                        <img src="p3.svg" alt="fire extinguisher" />
                        <div className='mt-4'>
                            <p className='text-xl font-semibold pt-4'>ABC Stored Pressure Type Fire Extinguisher</p>
                            <p className='text-[#75777A] pt-3'>The devices within a fire pump controller panel perform such functions as receiving signals from alarm devices, such as pressure operated switches, sprinkler alarm valves or remote fire alarm equipment; activating motor control devices to provide electric power to motors driving fire pumps and monitoring the fire pump</p>
                        </div>
                    </div>
                </div>
                <button className='mt-16 pl-3 pr-3 w-[300px] ml-[614px] rounded-md pt-3 pb-3 bg-[#E43333] text-white'>Explore All Product and Details</button>
            </div>

        </div>
    )
}

export default Product