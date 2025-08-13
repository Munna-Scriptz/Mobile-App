import React from 'react'
import brand1 from '../assets/images/brand1.svg'
import brand2 from '../assets/images/brand2.svg'
import brand3 from '../assets/images/brand3.svg'
import brand4 from '../assets/images/brand4.svg'
import brand5 from '../assets/images/brand5.svg'
import brand6 from '../assets/images/brand6.svg'
import { Link } from 'react-router'
const Brands = () => {
  return (
    <>
        <section id='Brands' className='mt-[96px]'>
            <div className="container">
                <div id="Brands-Row" className='flex items-center gap-[24px]'>
                    <Link to={'/'} className='h-[100px] flex items-center justify-center px-[39px] border-1 border-gray300 w-fit duration-[.3s] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                        <img src={brand1} alt="Brand image" />
                    </Link>
                    <Link to={'/'} className='h-[100px] flex items-center justify-center px-[39px] border-1 border-gray300 w-fit duration-[.3s] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                        <img src={brand2} alt="Brand image" />
                    </Link>
                    <Link to={'/'} className='h-[100px] flex items-center justify-center px-[39px] border-1 border-gray300 w-fit duration-[.3s] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                        <img src={brand3} alt="Brand image" />
                    </Link>
                    <Link to={'/'} className='h-[100px] flex items-center justify-center px-[39px] border-1 border-gray300 w-fit duration-[.3s] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                        <img src={brand4} alt="Brand image" />
                    </Link>
                    <Link to={'/'} className='h-[100px] flex items-center justify-center px-[39px] border-1 border-gray300 w-fit duration-[.3s] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                        <img src={brand5} alt="Brand image" />
                    </Link>
                    <Link to={'/'} className='h-[100px] flex items-center justify-center px-[39px] border-1 border-gray300 w-fit duration-[.3s] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                        <img src={brand6} alt="Brand image" />
                    </Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Brands