import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/Logo.svg'
import LogoWhite from '../assets/images/logoWhite.svg'
import { Link } from 'react-router'
import Play from '../assets/images/PlaystoreIcon.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import { FaApple } from 'react-icons/fa6'

const Footer = () => {
    const savedTheme = localStorage.getItem('theme');
  return (
    <>
        <footer className='pb-[48px] pt-[64px]'>
            <div className="container">
                <div id="Footer-Row" className='flex flex-col items-center'>
                    {/* -------Footer Logo------- */}
                    <Link data-aos="fade-up" to={'/'}>
                        {
                            savedTheme == 'light'?
                            <img src={Logo} alt="Logo" />
                            :
                            <img src={LogoWhite} alt="Logo" />
                        }
                    </Link>
                    {/* -------Footer Links------- */}
                    <ul className='flex items-center gap-[56px] mt-[48px]' data-aos="fade-up">
                        <li className='text-gray800 text-base'><Link id='UnderLineHover' to={'/'}>Home</Link></li>
                        <li className='text-gray800 text-base'><Link id='UnderLineHover' to={'/'}>Features</Link></li>
                        <li className='text-gray800 text-base'><Link id='UnderLineHover' to={'/'}>Overview</Link></li>
                        <li className='text-gray800 text-base'><Link id='UnderLineHover' to={'/'}>Blog</Link></li>
                        <li className='text-gray800 text-base'><Link id='UnderLineHover' to={'/'}>Contact</Link></li> 
                        <li className='text-gray800 text-base'><Link id='UnderLineHover' to={'/'}>Account</Link></li> 
                    </ul>
                    {/* -------Footer Button------- */}
                    <div className='mt-[64px] flex items-center gap-[24px]' data-aos="fade-up">
                            <a href='#' className='bg-gray900 flex items-center gap-[11px] py-[10px] px-[22px] w-fit rounded-[8px]'>
                                <FaApple className='text-gray100 text-4xl' />
                                <div>
                                    <p className='text-gray100 text-sm leading-[15px]'>Download on the</p>
                                    <h2 className='text-[20px] text-gray100 font-semibold leading-[26px]'>Apple Store</h2>
                                </div>
                            </a>
                            <a href='#' className='bg-gray900 flex items-center gap-[11px] py-[10px] px-[22px] w-fit rounded-[8px]'>
                                <img src={Play} alt="icon" />
                                <div>
                                    <p className='text-gray100 text-sm leading-[15px]'>GET IT ON</p>
                                    <h2 className='text-[20px] text-gray100 font-semibold leading-[26px]'>Google Play</h2>
                                </div>
                            </a>
                    </div>
                    {/* -------Footer Social Links------- */}
                    <div className='mt-[56px] flex items-center gap-[16px]' data-aos="fade-up">
                        <Link to={'/'} className='text-gray800 text-[18px] w-[44px] h-[44px] bg-gray200 rounded-[6px] flex items-center justify-center duration-[.3s] hover:bg-brand hover:text-gray300 '>
                            <FaFacebookSquare />
                        </Link>
                        <Link to={'/'} className='text-gray800 text-[18px] w-[44px] h-[44px] bg-gray200 rounded-[6px] flex items-center justify-center duration-[.3s] hover:bg-brand hover:text-gray300 '>
                            <FaTwitter />
                        </Link>
                        <Link to={'/'} className='text-gray800 text-[18px] w-[44px] h-[44px] bg-gray200 rounded-[6px] flex items-center justify-center duration-[.3s] hover:bg-brand hover:text-gray300 '>
                            <PiInstagramLogoFill />
                        </Link>
                        <Link to={'/'} className='text-gray800 text-[18px] w-[44px] h-[44px] bg-gray200 rounded-[6px] flex items-center justify-center duration-[.3s] hover:bg-brand hover:text-gray300 '>
                            <FaYoutube />
                        </Link>
                    </div>
                    {/* -------Footer Copyright------- */}
                    <p className='text-gray600 text-[14px] text-center mt-[72px] w-[856px]'>2021. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer