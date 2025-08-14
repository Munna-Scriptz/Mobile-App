import React from 'react'
import Logo from '../assets/images/Logo.svg'
import { Link } from 'react-router'
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
        <nav>
            <div className="container">
                <div id="NavBar_Row" className='py-[25px] flex items-center justify-between'>
                    <div className='flex items-center gap-[48px]'>
                        <img src={Logo} alt="Logo" />
                        <ul className='flex items-center gap-[24px] font-manrope font-semibold text-base text-gray800'>
                            <li><Link id='UnderLineHover' to={'/'}>Features</Link></li>
                            <li><Link id='UnderLineHover' to={'/'}>Overview</Link></li>
                            <li><Link id='UnderLineHover' to={'/'}>Store</Link></li>
                            <li><Link id='UnderLineHover' to={'/'}>Blog</Link></li>
                            <li><Link id='UnderLineHover' to={'/'}>Contact</Link></li>
                        </ul>
                    </div>
                    {/* -----------Nav button--------  */}
                    <div className='flex items-center gap-[32px]'>
                        <div className='flex items-center gap-[16px]'>
                            <p className='font-manrope font-semibold text-gray700'>Light</p>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer"/>
                                <div className="group peer ring-0 bg-brand  rounded-full outline-none duration-300 after:duration-300 w-[46px] h-[26px]  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-[20px] after:w-[20px] after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-5 peer-hover:after:scale-95">
                                </div>
                            </label>
                            <p className='font-manrope font-semibold text-gray700'>Dark</p>
                        </div>
                        {/* --------Button-------- */}
                        <button className='bg-brand py-[9px] px-[20px] text-white flex items-center gap-2 rounded-[4px] font-manrope text-[14px] font-semibold cursor-pointer'>
                            <FiUser />
                            <span>Sign in / up</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar