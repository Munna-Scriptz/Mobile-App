import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaAngleDown } from "react-icons/fa6";

const Faq = () => {

  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      q: "Is any of my personal information stored in the App?",
      a: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat. Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.",
      border: 'border-b-1'
    },
    {
      q: "What formats can I download my transaction history in?",
      a: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat. Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.",
      border: 'border-b-1'
    },
    {
      q: "Can I schedule future transfers?",
      a: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat. Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.",
      border: 'border-b-1'
    },
    {
      q: "When can I use Banking App services?",
      a: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat. Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.",
      border: 'border-b-1'
    },
    {
      q: "Can I create my own password that is easy for me to remember?",
      a: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat. Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.",
      border: 'border-b-1'
    },
    {
      q: "What happens if I forget or lose my password?",
      a: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat. Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer."
    },
  ]

  const toggleFaq = (index) => {
    setActiveIndex(prev => (prev === index ? null : index))
  }


  return (
    <>
        <section id='FAQ' className='mt-[112px]'>
            <div className="container">
                <div id="Faq-Row" className='flex items-center justify-between'>
                    {/* -----------Left Side------------ */}
                    <div className='w-[416px]'>
                        <h2 className='text-gray900 text-[32px] font-extrabold w-[336px]'>Any questions? Check out the FAQs</h2>
                        <p className='text-gray700 text-lg my-[32px]'>Still have unanswered questions and need to get in touch?</p>
                        <Link className='text-white font-semibold bg-brand py-[14px] px-[28px] text-[14px] rounded-[6px]' to={'/'}>Contact us now</Link>
                    </div>
                    {/* -----------Left Side------------ */}
                    <div className='w-[746px] border-1 border-gray300 py-[6px] rounded-[6px] box-border'>
                        {faqs.map((item, i) => (
                        <div key={i} className={`${item.border} border-gray300 py-[16px]`}>
                            <div className='overflow-hidden'>
                            <div onClick={() => toggleFaq(i)} className='flex items-center justify-between px-[24px] cursor-pointer'>
                                <p className='text-gray900 font-semibold text-base'>{item.q}</p>
                                <div id='ArrowDownSHadow' className={`bg-brand w-[36px] h-[36px] rounded-full flex items-center justify-center duration-[.3s] ${activeIndex === i ? 'bg-brand text-white' : 'bg-transparent'}`}>
                                  <FaAngleDown className={`duration-300 ${activeIndex === i ? 'rotate-180' : ''}`} />
                                </div>
                            </div>

                            <div className={`px-[24px] duration-300 overflow-hidden ${ activeIndex === i ? 'h-[200px] pt-[32px]' : 'h-0' }`}>
                                <p className='text-gray700 text-[14px]'>{item.a}</p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Faq