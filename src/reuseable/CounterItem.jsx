import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function CounterItem(props) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const [startCounting, setStartCounting] = useState(false);
  const countUpRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="item text-center w-[48%] md:w-1/4 pb-10 md:pb-0">
      <p className='font-semibold text-xl md:text-4xl text-yellow'>
        <span>
          {startCounting ? (
            <CountUp start={1} end={props.count} ref={countUpRef} />
          ) : (
            <span>{props.count}</span>
          )}
        </span>
        +
      </p> 
      <p className='font-medium text-base md:text-xl text-black'>{props.title}</p>
    </div>
  );
}
