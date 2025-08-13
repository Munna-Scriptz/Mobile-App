import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import VideoImg from '../assets/images/UseVideoImg.png'
const Use = () => {
  return (
    <div>
        <section id='Use' className='mt-[112px]'>
            <div className="container">
                <div id="Use-Row" className='flex items-center justify-between'>
                    {/* ------------Left Side---------- */}
                    <div>
                        <h2 className='text-gray900 font-extrabold text-[32px] mb-[32px]'>Simple & Easy to Use</h2>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex items-center gap-2'>
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 text-base '>Banking transactions are free for you</p>
                            </li>
                            <li className='flex items-center gap-2'>
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 text-base '>No monthly cash commission</p>
                            </li>
                            <li className='flex items-center gap-2'>
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 text-base '>Manage payments and transactions online</p>
                            </li>
                            <li className='flex items-center gap-2'>
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 text-base '>Receive real-time alerts</p>
                            </li>
                            <li className='flex items-center gap-2'>
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 text-base '>Receive payment from international bank details</p>
                            </li>
                        </ul>
                        <button className='flex items-center gap-2 text-white font-semibold py-[12px] px-[28px] bg-brand rounded-[6px] mt-[40px]'>Learn more<FaArrowRight /></button>
                    </div>
                    {/* ------------Right Side---------- */}
                    <div>
                        <img src={VideoImg} alt="Image" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Use