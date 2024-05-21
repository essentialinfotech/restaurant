import React from 'react'

export default function TestimonialItem(props) {
  return (
    <>
            <div className="testimonial  pt-10  pb-[74px] px-20">
                    <div className="person_info w-max pb-4 mx-auto flex gap-2 items-center">
                        <div className="img">
                            <picture>
                                <img src={props.img} alt={props.img} />
                            </picture>
                        </div>
                        <div className="text">
                            <h4  className='font-inter font-medium text-base text-black'>{props.name} | {props.location}</h4>
                            <h6 className='font-inter font-normal text-sm text-[#5E5E5E]'>{props.desig}</h6>
                        </div>
                    </div>
                    <div className="feedback">
                        <p className='font-inter font-normal text-base text-black text-center'>{props.feedback}</p>
                    </div>
            </div>
    </>
  )
}
