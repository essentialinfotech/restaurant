import React from 'react'
import CounterItem from '../../reuseable/CounterItem'

export default function Counter() {
  return (
    <>
    <section>
        <div className="content pb-16">
            <div className="content_box">
                <p className='font-inter font-normal text-base text-black text-center py-14 px-4 md:px-0'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentlyPageMaker including versions of Lorem Ipsum.</p>
                <div className="counter_box max-w-[1096px] mx-auto flex flex-wrap justify-between ">
                    <CounterItem count={250} title={'Daily Order'}/>
                    <CounterItem count={85} title={'Special Dishes'}/>
                    <CounterItem count={100} title={'Expert Chef'}/>
                    <CounterItem count={100} title={'Award Won'}/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
