import React from 'react'

const Client = () => {
  return (
    <div className='h-[460px] w-full flex flex-col'>
        <div className='w-auto h-[420px] flex flex-col justify-center align-middle bg-[#F7F8FB]'>
            <div className='text-5xl font-semibold mx-auto'>Our Clients</div>
            <p className='mt-10 text-[#75777A] w-[550px] mx-auto'>We work closely with a wide range of clients from differentsectors and regions across public sector, private sector and local and national.</p>
                <div className='flex flex-row justify-evenly mt-[80px] content-center gap-20'>
                    <img src="/c1.svg" alt="client" />
                    <img src="/c2.svg" alt="client" />
                    <img src="/c3.svg" alt="client" />
                    <img src="/c4.svg" alt="client" />
                    <img src="/c5.svg" alt="client" />
                </div>
        </div>
    </div>
  )
}

export default Client