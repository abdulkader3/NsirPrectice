import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa'






const FormCard = () => {
    return (
        <>

                      {/* Send Us a Message */}
        
                      <div className="w-[648px] h-[750px] px-[32px] shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.1)] rounded-[16px] text-[#212121] py-[48px] ">
        
                          <p className='text-[32px] font-semibold '>Send Us a Message</p>
        
                          <form action="submit" className='text-[16px] font-medium mt-[48px] ' >
        
        
        
                            <div className="w-full ">
                              <p>Full Name</p>
                              <input className='pl-[16px] w-full h-[49px] focus:outline-none rounded-[16px] border-[#4A5565] border-[2px] ' type="text" placeholder='John Doe' />
                            </div>
        
        
                            <div className="w-full my-[24px] ">
                              <p>Email Address</p>
                              <input className='pl-[16px] w-full h-[49px] focus:outline-none rounded-[16px] border-[#4A5565] border-[2px] ' type="text" placeholder='John Doe' />
                            </div>
        
        
                            <div className="w-full ">
                              <p>Phone Number</p>
                              <input className='pl-[16px] w-full h-[49px] focus:outline-none rounded-[16px] border-[#4A5565] border-[2px] ' type="text" placeholder='John Doe' />
                            </div>
        
        
                            <div className="w-full mt-[24px] mb-[48px] ">
                              <p>Project Details</p>
        
                              <textarea className=' w-full h-[124px] p-5 focus:outline-none rounded-[16px] border-[#4A5565] border-[2px]' name="" id=""  placeholder='Tell us about your project...' ></textarea>
                            </div>
        
        
                            <button className='flex items-center gap-[10px] w-full bg-[#2E7D32] h-[49px] text-white justify-center rounded-[16px] '>Send Message <FaRegPaperPlane/> </button>
        
                          </form>
        
                      </div>
                      {/* Send Us a Message */}
            
        </>
    )
}

export default FormCard
