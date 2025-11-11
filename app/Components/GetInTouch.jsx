import React from 'react'
import Link from "next/link";
import Image from "next/image";
import  Facebook  from "../../public/photos/facebook.png";
import  Linkdin  from "../../public/photos/linkdin.png";
import  Instagram  from "../../public/photos/instagram.png";
import  Youtub  from "../../public/photos/youtube.png";

import Clock from "../../public/photos/clock.png"
import Email from "../../public/photos/mail.png"
import Phone from "../../public/photos/phone.png"
import Location from "../../public/photos/location.png"

const GetInTouch = () => {
    return (
        <>

        <div className=" w-[536px] h-[827px] text-[18px] font-normal ">

              <p className="text-[32px] font-semibold mb-[24px] ">Get in Touch</p>

              <p className=" mb-[62px] text-[#4A5565] ">Have questions about our services or want to discuss a project? We're here to help. Contact us through any of the methods below and our team will respond as soon as possible.</p>

              <div className="w-full h-[100px] rounded-[16px] border-[#4a556575] border-[2px] p-[24px] text-[#09231E] text-[14px] flex items-center ">

                <div className=" flex items-center gap-3">
                    <div className="w-[48px] h-[48px] "><Link href={"#"}> <Image src={Clock} alt='' className='w-full h-full'/>  </Link></div>

                    <div className="">
                      <p className='text-[18px] font-semibold '>Business Hours</p>
                      <p className='text-[#4A5565] '>Mon-Sat, 9:00 AM – 6:00 PM</p>
                    </div>
                </div>

              </div>



              <div className="w-full h-[100px] rounded-[16px] border-[#4a556575] border-[2px] my-[24px] p-[24px] text-[#09231E] text-[14px] flex items-center ">
                <div className=" flex items-center gap-3">
                    <div className="w-[48px] h-[48px] "><Link href={"#"}> <Image src={Email} alt='' className='w-full h-full'/>  </Link></div>

                    <div className="">
                      <p className='text-[18px] font-semibold '>Email</p>
                      <p className='text-[#4A5565] '>info@spacedevelopment.com</p>
                    </div>
                </div>

              </div>




              <div className="w-full h-[100px] rounded-[16px] border-[#4a556575] border-[2px] p-[24px] text-[#09231E] text-[14px] flex items-center ">
                <div className=" flex items-center gap-3">
                    <div className="w-[48px] h-[48px] "><Link href={"#"}> <Image src={Phone} alt='' className='w-full h-full'/>  </Link></div>

                    <div className="">
                      <p className='text-[18px] font-semibold '>Contact Us</p>
                      <p className='text-[#4A5565] '>+880 1234 567 890</p>
                    </div>
                </div>

              </div>




              <div className="w-full h-[100px] rounded-[16px] border-[#4a556575] border-[2px] my-[24px] p-[24px] text-[#09231E] text-[14px] flex items-center ">
                <div className=" flex items-center gap-3">
                    <div className="w-[48px] h-[48px] "><Link href={"#"}> <Image src={Location} alt='' className='w-full h-full'/>  </Link></div>

                    <div className="">
                      <p className='text-[18px] font-semibold '>Location</p>
                      <p className='text-[#4A5565] w-[400px] '>Momtaz Plaza (4th floor), House#7, Road#4 Opposite of Labaid Hospital Dhaka, 1205</p>
                    </div>
                </div>

              </div>




              <p className=" text-[20px] py-[24px] font-semibold ">Connect With Us</p>

              <div className=" flex gap-[16px] ">

                <div className="w-[48px] h-[48px]"><Link href={"#"}> <Image src={Facebook} alt="Icon" className=" w-full h-full"/>  </Link></div>
                <div className="w-[48px] h-[48px]"><Link href={"#"}> <Image src={Linkdin} alt="Icon" className=" w-full h-full"/>  </Link></div>
                <div className="w-[48px] h-[48px]"><Link href={"#"}> <Image src={Instagram} alt="Icon" className=" w-full h-full"/>  </Link></div>
                <div className="w-[48px] h-[48px]"><Link href={"#"}> <Image src={Youtub} alt="Icon" className=" w-full h-full"/>  </Link></div>
                
              </div>



          </div>
            
        </>
    )
}

export default GetInTouch
