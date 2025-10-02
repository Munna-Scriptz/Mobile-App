import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SliderImg1 from '../assets/images/workSlider1.svg'
import SliderImg2 from '../assets/images/workSlider2.svg'
import SliderImg3 from '../assets/images/workSlider3.svg'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Works = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <FaAngleRight />,
        prevArrow: <FaAngleLeft />
    };
  return (
    <>
        <section id='Works' className='mt-[112px] pt-[80px] pb-[96px] bg-gray100 relative'>
            <div className="container">
                <div id="Works-Row">
                    {/* -----------Header------------- */}
                    <div data-aos="fade-up">
                        <h2 className='text-gray900 text-[40px] font-extrabold text-center'>How Does It Work?</h2>
                    </div>
                    {/* ------------Slider------------ */}
                    <div className='mt-[48px]' data-aos="fade-up">
                        <Slider {...settings}>
                            <div>
                                <img src={SliderImg1} alt="Image" />
                            </div>
                            <div>
                                <img src={SliderImg3} alt="Image" />
                            </div>
                            <div>
                                <img src={SliderImg2} alt="Image" />
                            </div>
                        </Slider>
                    </div>
                    <div className='mt-[40px] flex flex-col items-center' data-aos="fade-up">
                        <h2 className='text-gray900 text-2xl font-extrabold'>Step 2. Latest transaction history</h2>
                        <p className='text-gray700 text-base font-normal w-[636px] text-center mt-[12px]'>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
                    </div>
                </div>
            </div>
            <div className='w-full bg-gray300 h-[2px] absolute bottom-0 left-0' data-aos="fade-up">
                <span className='absolute left-0 top-0 bg-brand w-[508px] h-full'></span>
            </div>
        </section>
    </>
  )
}

export default Works