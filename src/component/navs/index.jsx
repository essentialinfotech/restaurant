import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar() {
  let [menu, setMenu] = useState(false)
  let [fixMenu, setFixMenu] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', function(){
      if(this.scrollY > 400){
        setFixMenu(true)
      }else{
        setFixMenu(false)
      }
    })
  },[])
  
  return (
    <>
     <nav className={`bg-transparent ${fixMenu ? 'fixed top-0  !bg-dark border-b border-yellow':'absolute'} z-[999999] w-full  py-4 pb-5`}>
       <div className="content">
        <div className="flex justify-between items-center relative">
          {/* LOGO START */}
          <div className="w-1/6">
           <picture>
            <img src={logo} alt={logo} />
           </picture>
          </div>
           <div className="mobile_btn block md:hidden text-white text-4xl" onClick={()=> setMenu(!menu)}>
            {menu ? 
             <IoCloseOutline/>
             :
             <CiMenuFries/>
            }
           </div>
     
          <div className={`w-full h-96 md:h-0 absolute  top-16 md:top-0  z-[999999]  ${menu ? '-right-0': '-right-[120%]'} md:right-0 duration-500 ease-in-out md:w-5/6 `}>
             <div className="bg-dark/50 backdrop-blur-xl md:backdrop-blur-none md:bg-transparent p-10 md:p-0">
              <div className="md:flex justify-between items-center">
                  {/* MENU START */}
                  <div className="w-full md:w-[80%]">
                    <ul className='md:flex item-center justify-center space-y-10 md:space-y-0'>
                      <li><a className='menu_a' href="#">Home</a></li>
                      <li><a className='menu_a' href="#">Menu</a></li>
                      <li><a className='menu_a' href="#">Gallery</a></li>
                      <li><a className='menu_a' href="#">Contact</a></li>
                    </ul>
                  </div>
                  {/* BUTTON START */}
                  <div className="w-full md:w-[20%] text-start pt-10 md:pt-0 md:text-end">
                    <div className="btn">
                      <a href="#" className='border-2 text-white font-inter font-medium text-xl md:text-lg xl:text-xlj px-4 py-2 duration-500 inline-block z-[99] after:z-[-1] hover:border-yellow relative overflow-hidden  rounded-full after:w-0 after:h-0 after:bg-yellow after:absolute after:bottom-0 after:left-1/2 hover:after:w-full hover:after:h-full after:duration-500 after:-translate-x-1/2 after:rounded-full'>Reservation</a>
                    </div>
                  </div>
              </div>
             </div>
          </div>
        </div>
       </div>
     </nav>
    </>
  )
}
