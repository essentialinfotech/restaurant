import React from 'react'
import bg from '../../assets/offer_bg.png'
import FoodItem from '../../reuseable/FoodItem'
import foodOne from '../../assets/food/f1.png'
import foodTwo from '../../assets/food/f2.png'
import foodThree from '../../assets/food/f3.png'
import foodFour from '../../assets/food/f4.png'
import Title from '../title'

export default function SpecialOffer() {
  return (
    <>
    <section id='special_offer' style={{background:`url(${bg}) no-repeat`}} className='bg-cover bg-no-repeat bg-center py-12 pb-[260px]'>
        <div className="content">
            <Title title={'Special Offer'} color={'white'}/>
            <div className="content_box flex flex-wrap justify-between item-center pt-10">
                <FoodItem img={foodOne} title={'Creaser Salad'} info={'Chicken/ Salad/ Olives'} offer={'20'}/>
                <FoodItem img={foodTwo} title={'Pizza'} info={'Chicken/ Salad/ Olives'} offer={'20'}/>
                <FoodItem img={foodThree} title={'Dessert'} info={'Chicken/ Salad/ Olives'} offer={'20'}/>
                <FoodItem img={foodFour} title={'Sushi'} info={'Chicken/ Salad/ Olives'} offer={'20'}/>
            </div>
        </div>
    </section>
    </>
  )
}
