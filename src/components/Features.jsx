import React from 'react'
import FeatureImages from '../assets/images/FeatureImage.svg'
import fIcon1 from '../assets/images/FIcon1.svg'
import fIcon2 from '../assets/images/FIcon2.svg'
import fIcon3 from '../assets/images/FIcon3.svg'
import fIcon4 from '../assets/images/FIcon4.svg'
import fIcon5 from '../assets/images/FIcon5.svg'
import fIcon6 from '../assets/images/FIcon6.svg'

const Features = () => {
  return (
    <>
        <section id='Features' className='mt-[112px]'>
            <div className="container">
                <div id="Feature-Row" className='flex items-center justify-between'>
                    {/* -------------Left Side------------ */}
                    <div data-aos="fade-right">
                        <img src={FeatureImages} alt="Image" />
                    </div>
                    {/* -------------Right Side------------ */}
                    <div className='w-[746px]'>
                        {/* -------Header------- */}
                        <h2 className='text-gray900 text-[40px] font-extrabold' data-aos="fade-up">App Features</h2>
                        <p className='text-gray600 text-lg mt-[24px]' data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                        {/* -------List------- */}
                        <div className='mt-[56px] flex items-center flex-wrap gap-x-[56px] gap-y-[48px]'>
                            <div className='flex items-start gap-[24px]' data-aos="fade-up">
                                <div><img src={fIcon1} alt="Icon" /></div>
                                <div className='w-[261px]'>
                                    <h2 className='text-xl text-gray900 font-extrabold'>Easy Payments</h2>
                                    <p className='text-base text-gray700 mt-3'>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-[24px]' data-aos="fade-up">
                                <div><img src={fIcon2} alt="Icon" /></div>
                                <div className='w-[261px]'>
                                    <h2 className='text-xl text-gray900 font-extrabold'>Data Security</h2>
                                    <p className='text-base text-gray700 mt-3'>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                                </div>
                            </div>
                            <div className='flex items-start gap-[24px]' data-aos="fade-up">
                                <div><img src={fIcon3} alt="Icon" /></div>
                                <div className='w-[261px]'>
                                    <h2 className='text-xl text-gray900 font-extrabold'>Cost Statistics</h2>
                                    <p className='text-base text-gray700 mt-3'>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-[24px]' data-aos="fade-up">
                                <div><img src={fIcon4} alt="Icon" /></div>
                                <div className='w-[261px]'>
                                    <h2 className='text-xl text-gray900 font-extrabold'>Support 24/7</h2>
                                    <p className='text-base text-gray700 mt-3'>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-[24px]' data-aos="fade-up">
                                <div><img src={fIcon5} alt="Icon" /></div>
                                <div className='w-[261px]'>
                                    <h2 className='text-xl text-gray900 font-extrabold'>Regular Cashback</h2>
                                    <p className='text-base text-gray700 mt-3'>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-[24px]' data-aos="fade-up">
                                <div><img src={fIcon6} alt="Icon" /></div>
                                <div className='w-[261px]'>
                                    <h2 className='text-xl text-gray900 font-extrabold'>Top Standards</h2>
                                    <p className='text-base text-gray700 mt-3'>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features