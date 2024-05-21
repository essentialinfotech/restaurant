import React from 'react'
import bg from '../../assets/footer/banner.png'
import vagi from '../../assets/footer/vagi.png'
import { FiLinkedin } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import logo from '../../assets/logo.png'
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <>
    <footer style={{background:`url(${bg}) no-repeat`}} className='py-10 relative overflow-hidden  !bg-cover !bg-center'>
        <div className="content pb-20">
                <div className="absolute -left-10 -top-8 z-[1]">
                    <div className="shape">
                        <picture>
                            <img src={vagi} alt={vagi} />
                        </picture>
                    </div>
                </div>
            <div className="flex flex-wrap justify-between relative z-[3]">
                <div className="w-[150px] hidden md:block"></div>
                <div className="w-[100%] md:w-1/4">
                    <div className="logo">
                        <picture>
                            <img  className='w-[150px]' src={logo} alt={logo} />
                        </picture>
                    </div>
                    <p className='text-white font-inter font-extralight text-base py-4'>Lorem Ipsum passages, and more</p>
                    <div className="social_icon">
                        <ul className='flex gap-8 text-white'>
                            <li><a className='text-2xl duration-500 ease-in-out hover:text-yellow' href="#"><FiLinkedin/></a></li>
                            <li><a className='text-2xl duration-500 ease-in-out hover:text-yellow' href="#"><IoLogoTwitter/></a></li>
                            <li><a className='text-2xl duration-500 ease-in-out hover:text-yellow' href="#"><FaFacebook/></a></li>
                            <li><a className='text-2xl duration-500 ease-in-out hover:text-yellow' href="#"><FaSquareInstagram/></a></li>
                           
                        </ul>
                    </div>
                </div>
                <div className="w-[48%] md:w-1/4 mt-10 md:mt-0">
                    <ul className='space-y-3'>
                    <li><a className='f_menu_a' href="#">Home</a></li>
                    <li><a className='f_menu_a' href="#">Menu</a></li>
                    <li><a className='f_menu_a' href="#">Gallery</a></li>
                    <li><a className='f_menu_a' href="#">Contact</a></li>
                    <li><a className='f_menu_a' href="#">Blook & Table</a></li>
                    </ul>
                </div>
                <div className="w-[48%] md:w-1/4 mt-10 md:mt-0">
                    <ul className='space-y-3'>
                    <li className='text-white font-normal text-base flex items-center'><span className='w-10 inline-block text-left text-[24px]'><IoLocationOutline/></span> <span className='pl-4'>Sector#13, Uttara, Dhaka 1230</span></li>
                    <li className='text-white font-normal text-base flex items-center'><span className='w-10 inline-block text-base'><FaPhoneAlt/></span> <span>+012000000</span></li>
                    <li className='text-white font-normal text-base flex items-center'><span className='w-10 inline-block text-xl'><MdOutlineMail/></span> <span>info@essential-infotech.com</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="content">
            <p className='font-inter text-sm font-extralight text-right text-white'>All rights recovered by EIT @ 2024</p>
        </div>
    </footer>
    </>
  )
}
