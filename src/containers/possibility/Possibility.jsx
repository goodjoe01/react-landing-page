import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.webp'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const LazyPossibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">

      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
      
  </div>
  )
}

const Possibility = () => {
  const [display, setDisplay] = useState(false);
  const ref = useRef();

  useEffect(()=>{

    const onChange = (entries, observer) => {
      const e = entries[0];

      if(e.isIntersecting) {
        setDisplay(true);
        observer.disconnect();
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '200px'
    })

    observer.observe(ref.current)

    return () => observer.disconnect();
  });

  return (
    <div ref={ref}>
      {
        display? <LazyPossibility/> : null
      }
    </div>
  )
}

export default Possibility
