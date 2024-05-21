import React from 'react'

export default function Title(props) {
  return (
    <>
            <div className="title text-center">
            <h6 className={`font-inter font-semibold text-2xl mb-4 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-[60px] after:rounded-full after:h-[2px] after:bg-yellow after:content-[""] inline-block text-${props.color}`}>{props.title}</h6>
            </div>
    </>
  )
}
