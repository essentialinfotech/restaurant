import React from 'react'
import person from '../../assets/testimonial/men.png'
import Slider from "react-slick";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Title from '../title';
import TestimonialItem from '../../reuseable/TestimonialItem';



const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute left-5 top-1/2 text-2xl z-[999] text-black/65 cursor-pointer" onClick={onClick}>
        <HiOutlineArrowNarrowLeft  />
      </div>
    );
  };
  
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div  className="absolute right-5 top-1/2 text-2xl z-[999] text-black/65 cursor-pointer" onClick={onClick}>
        <HiOutlineArrowNarrowRight  />
      </div>
    );
  };
export default function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        nextArrow: <CustomNextArrow/>,
        prevArrow: <CustomPrevArrow/>,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
    <section id='testimonial' className='py-24'>
        <div className="content">
            <Title title={'Testimonial'} color={'black'}/>

            <div className="content_box mt-10 shadow-lg">
            <Slider {...settings}>
              <TestimonialItem img={person} feedback={'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containingand more recentlyPageMaker including versions of Lorem Ipsum.'} name={'Mark Smith'} desig={'App Developer'} location={'California'}/>
              <TestimonialItem img={person} feedback={'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containingand more recentlyPageMaker including versions of Lorem Ipsum.'} name={'Mark Smith'} desig={'App Developer'} location={'California'}/>
              <TestimonialItem img={person} feedback={'It has survived not only five centuries, but also '} name={'Mark Smith'} desig={'App Developer'} location={'California'}/>
               
            </Slider>
            </div>
          
        </div>
    </section>
    </>
  )
}
