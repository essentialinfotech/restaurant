import React from 'react'
import banner from '../../assets/hero.png'

export default function Hero() {
  return (
    <>
        <section id='Hero' style={{background:`url(${banner})`}} className='!bg-no-repeat !bg-cover !bg-top'>
            <div className="content">
                <div className="hero_info text-center pt-[138px] pb-[320px]">
                    <h1 className='font-bold text-4xl md:text-[48px] text-white'>Made With Love</h1>
                    <p className='font-normal text-lg text-white py-3 max-w-[484px] mx-auto'>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Lorem Ipsum.</p>
                    <div className="">
                        <a href="#" className='font-semibold text-xl text-white bg-yellow hover:text-yellow border border-transparent rounded-full py-3 px-7 mt-2 inline-block duration-500 z-[99] after:z-[-1] hover:border-white relative overflow-hidden  rounded-full after:w-0 after:h-0 after:bg-white after:absolute after:bottom-0 after:left-1/2 hover:after:w-full hover:after:h-full after:duration-500 after:-translate-x-1/2 after:rounded-full' >Receive Your Desk</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
