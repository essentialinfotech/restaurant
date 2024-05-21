import React from 'react'
import chef from '../../assets/story/men.png'
import sign from '../../assets/story/sign.png'

export default function ChefStory() {
  return (
    <>
    <section id='our_story'>
        <div className="content">
            <div className="content_box bg-white max-w-[1096px] p-6 shadow-lg mx-auto mt-[-200px]">
                <div className="flex md:flex-row-reverse  justify-start flex-wrap gap-6 md:gap-0">
                    <div className="w-full md:w-1/2">
                        <div className="img">
                            <picture>
                                <img className=''  src={chef} alt={chef} />
                            </picture>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-10 md:pr-10">
                        <div className="story_text md:pt-10">
                            <h6 className='font-inter font-semibold text-2xl mb-4 relative after:absolute after:left-0 after:-bottom-1 after:w-[60px] after:rounded-full  after:h-[2px] after:bg-yellow after:content-[""] '>Our Story</h6>
                            <p className='font-inter font-normal text-base md:text-justify lg:text-left'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                            <picture>
                                <img className=''  src={sign} alt={sign} />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
