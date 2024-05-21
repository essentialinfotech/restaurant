import React from 'react'
import imgOne from '../../assets/story/img1.png'
import imgTwo from '../../assets/story/img2.png'

export default function OurStory() {
  return (
    <>
    <section id='our_story'>
        <div className="content">
            <div className="content_box bg-white max-w-[1096px] p-6 shadow-lg mx-auto mt-[-220px]">
                <div className="flex justify-start gap-3 md:gap-6 flex-wrap">
                    <div className="w-[48%] h-[300px] lg:h-[343px] md:w-[237px]">
                        <div className="img h-full overflow-hidden group">
                            <picture>
                                <img className='group-hover:scale-[1.2] h-full duration-300 object-cover'  src={imgOne} alt={imgOne} />
                            </picture>
                        </div>
                    </div>
                    <div className="w-[48%] h-[300px] lg:h-[343px] md:w-[294px]">
                        <div className="img h-full overflow-hidden group">
                            <picture>
                                <img className='group-hover:scale-[1.2] h-full duration-300 object-cover' src={imgTwo} alt={imgTwo} />
                            </picture>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/5 lg:pl-10 pt-5 md:pt-0">
                        <div className="story_text">
                            <h6 className='font-inter font-semibold text-2xl mb-4 relative after:absolute after:left-0 after:-bottom-1 after:w-[60px] after:rounded-full after:h-[2px] after:bg-yellow after:content-[""] '>Our Story</h6>
                            <p className='font-inter font-normal text-base '>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p className='font-inter font-normal text-base'>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
