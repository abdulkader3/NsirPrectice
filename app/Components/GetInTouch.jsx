import React from 'react'
import Link from "next/link";
import Image from "next/image";
import  Facebook  from "../../public/photos/facebook.png";
import  Linkdin  from "../../public/photos/linkdin.png";
import  Instagram  from "../../public/photos/instagram.png";
import  Youtub  from "../../public/photos/youtube.png";

import Clock from "../../public/photos/clock.png"

const GetInTouch = () => {
    return (
        <>

        <div className=" w-[536px] h-[827px] text-[18px] font-normal ">

              <p className="text-[32px] font-semibold mb-[24px] ">Get in Touch</p>

              <p className=" mb-[62px] text-[#4A5565] ">Have questions about our services or want to discuss a project? We're here to help. Contact us through any of the methods below and our team will respond as soon as possible.</p>

              <div className="w-full h-[100px] rounded-[16px] border-[#4a556575] border-[2px] p-[24px] ">

                <div className="">
                    <div className="w-[48px] h-[48px] "><Link href={"#"}> <Image src={Clock} alt='' className='w-full h-full'/>  </Link></div>
                </div>

              </div>

              <div className="w-full h-[100px] rounded-[16px] border-[#4a556575] border-[2px] my-[24px] p-[24px] ">

              </div>

              <div className="w-full h-[100px] rounded-[16px] border-[#4a556575] border-[2px] p-[24px] ">

              </div>

              <div className="w-full h-[100px] rounded-[16px] border-[#4a556575] border-[2px] my-[24px] p-[24px] ">

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
