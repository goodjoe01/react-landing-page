import React from 'react'
import people from '../../assets/people.webp'
import ai from '../../assets/ai.webp'
import './header.css'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">

        <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Discover the powerful capabilities of GPT-3 and how it can help you build amazing projects. Join us as we explore the future of artificial intelligence.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt='People' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt='Artificial Intelligence'/>
      </div>
      
    </div>
  )
}

export default Header
