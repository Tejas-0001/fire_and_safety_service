"use client";
import React, { useState } from 'react';
function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  async function handleSubmit(e) {
      e.preventDefault();
      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: JSON.stringify({
              access_key: "8843a540-83b7-4842-8590-3fbe78fe5243",
              name: e.target.name.value,
              email: e.target.email.value,
              message: e.target.message.value,
          }),
      });
      const result = await response.json();
      if (result.success) {
          console.log(result);
          setShowPopup(true);
      }
  }

return (
  <div>
    <form onSubmit={handleSubmit} className='w-auto flex flex-col'>
        <div  className='flex flex-col'>
            <label className='font-bold' htmlFor="name">Name:</label>
            <input className='border border-[#C9C9C9] rounded-md w-auto h-[56px] mt-1 pl-2' type="text" name="name" required placeholder="Your name" />
        </div>
        <div className='flex flex-col mt-5'>
            <label className='font-bold' htmlFor="email">Email:</label>
            <input className='border border-[#C9C9C9] rounded-md w-auto h-[56px] mt-1 pl-2' type="email" name="email" required placeholder="email@example.com" />
        </div>
        <div className='flex flex-col mt-5'>
            <label className='font-bold' htmlFor="message">How can we help ?</label>
            <textarea className='border border-[#C9C9C9] rounded-md w-auto h-[121px] mt-1 pl-2' name="message" required rows="3" placeholder="Enter Message"></textarea>
        </div>
        <button className='w-full mt-12 h-[56px] rounded-md text-white bg-[#E43333] pt-3 pr-[233px] pb-3 pl-[233px]' type="submit">Send</button>
     </form>
     {showPopup && (
        <div className="modal fade" id="mail-success-modal" tabIndex="-1" role="dialog" aria-labelledby="mail-success-label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p style={{ fontSize: '18px', textAlign: 'center', fontWeight: 'bold' }}>
                  📧 Your email has been sent successfully! 🎉
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
  </div>
);
}

export default Contact;
