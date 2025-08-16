import React from 'react'
import Notification from '../assets/images/notification.svg'
import { MdOutlineEmail } from "react-icons/md";

const Subscribe = () => {
  return (
    <>
        <section id='Subscribe' className='mt-[96px] bg-gray100 py-[72px]' data-aos="fade-up">
            <div className="container">
                <div id="Subscribe-Row" className='flex items-center justify-between'>
                    <div className='flex items-center gap-[32px]'>
                        <img src={Notification} alt="icon" />
                        <h2 className='text-gray900 text-2xl w-[416px] font-extrabold'>Subscribe to our newsletter to stay informed about latest updates</h2>
                    </div>
                    {/* ------------Input---------- */}
                    <div className='w-[472px] h-[52px] border-1 border-gray400 rounded-[8px] flex justify-between items-center'>
                        <div className='flex items-center w-full'>
                            <MdOutlineEmail className='text-gray500 text-[20px] ml-[16px]'/>
                            <input className='h-full rounded-[8px] outline-none pl-[8px] w-full' type="text" placeholder='Your Email'/>
                        </div>
                        <button className='bg-brand h-full text-white px-[32px] text-base font-semibold rounded-r-[8px] cursor-pointer'>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Subscribe