import React, { useState } from 'react'
import { FiLinkedin } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  let [search, setSearch] = useState(false)

  return (
    <>
    <header className='bg-dark py-3 border-b border-b-black'>
        <div className="content">
            <div className="flex justify-center md:justify-end">
                 <div className="search pr-10">
                    <input className={`${search ? 'w-full  p-2':'w-0'} duration-500 linear h-8 text-sm rounded-full border-none`} type="search" name="" id="" />
                 </div>
                <div className="social_icon">
                    <ul className='flex gap-8 text-white'>
                        <li><a className='text-2xl duration-700 ease-in-out hover:text-yellow' href="#"><FiLinkedin/></a></li>
                        <li><a className='text-2xl  duration-700 ease-in-out hover:text-yellow' href="#"><IoLogoTwitter/></a></li>
                        <li><a className='text-2xl  duration-700 ease-in-out hover:text-yellow' href="#"><FaFacebook/></a></li>
                        <li><a className='text-2xl  duration-700 ease-in-out hover:text-yellow' href="#"><FaSquareInstagram/></a></li>
                        <span className='block w-[1px] bg-white'></span>
                        <li><a onClick={()=>setSearch(!search)} className='text-2xl  duration-700 ease-in-out hover:text-yellow' href="#"><CiSearch/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}
