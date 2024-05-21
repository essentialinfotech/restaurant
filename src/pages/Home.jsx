import React from 'react'
import Header from '../component/header'
import Navbar from '../component/navs'
import Hero from '../component/hero'
import OurStory from '../component/our_story'
import Counter from '../component/counter'
import SpecialOffer from '../component/offer'
import ChefStory from '../component/chef_story'
import Footer from '../component/footer'
import Testimonial from '../component/testimonial'

export default function Home() {
  return (
     <>
        <Header/>
        <Navbar/>
        <Hero/>
        <OurStory/>
        <Counter/>
        <SpecialOffer/>
        <ChefStory/>
        <Testimonial/>
        <Footer/>

     </>
  )
}
