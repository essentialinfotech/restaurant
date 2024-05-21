import React from 'react'

export default function FoodItem(props) {
  return (
    <>
        <div className="item w-[48%] md:w-[24%] bg-white group relative z-[1] mb-4 md:mb-0">
        <a href="#">
           
           <div className="img overflow-hidden ">
               <picture>
                   <img className='group-hover:scale-[1.2] duration-300 ease-in-out' src={props.img} alt={props.img} />
               </picture>
           </div>
           <div className="info text-center pt-3 pb-6">
               <h4  className='text-xl text-black font-inter font-semibold pb-1'>{props.title}</h4>
               <p className='text-sm text-[#7D7D7D] font-inter font-normal '>{props.info}</p>
           </div>
           <span className='offer absolute top-0 px-4 pt-2 pb-5  right-8 bg-yellow text-center font-inter text-white font-medium text-sm z-[2] uppercase'> <span className='block'>{props.offer}%</span>  Off </span>
        </a>
       </div>
    </>
  )
}
