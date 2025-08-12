import React from 'react'
import Logo from '../assets/images/Logo.svg'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <>
        <nav>
            <div className="container">
                <div id="NavBar_Row" className='py-[25px] flex items-center justify-between'>
                    <div className='flex items-center gap-[48px]'>
                        <img src={Logo} alt="Logo" />
                        <ul className='flex items-center gap-[24px]'>
                            <li><Link to={'/'}>Features</Link></li>
                            <li><Link to={'/'}>Overview</Link></li>
                            <li><Link to={'/'}>Store</Link></li>
                            <li><Link to={'/'}>Blog</Link></li>
                            <li><Link to={'/'}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar