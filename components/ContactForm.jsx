"use client";
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    console.log(formData);
    const response = await fetch('/api/sendMail',{
      method:"POST",
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData)
    })
  };

  return (
    <form onSubmit={handleSubmit} className='w-auto flex flex-col'>
      <div className='flex flex-col'>
        <label className='font-bold' htmlFor="name">Name:</label>
        <input className='border border-[#C9C9C9] rounded-md w-auto h-[56px] mt-1'
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col mt-5'>
        <label className='font-bold' htmlFor="name">Email:</label>
        <input className='border border-[#C9C9C9] rounded-md w-auto h-[56px] mt-1'
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col mt-5'>
        <label className='font-bold' htmlFor="name">How can we help ?</label>
        <textarea className='border border-[#C9C9C9] rounded-md w-auto h-[121px] mt-1'
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className='w-full mt-12 h-[56px] rounded-md text-white bg-[#E43333] pt-3 pr-[233px] pb-3 pl-[233px]' type="submit">Send</button>
    </form>
  );
}

export default Contact;

