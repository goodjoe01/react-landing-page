import React from 'react'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers'
import { Cta, Brand, Navbar} from './components'
import { Element  } from 'react-scroll'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Element name='home'> <Header/> </Element>
      </div>
      <Brand/>
      <Element name='whatgpt3'> <WhatGPT3/> </Element>
      <Element name='features'> <Features/> </Element>
      <Element name='possibility'> <Possibility/> </Element>
      <Element name='cta'> <Cta/> </Element>
      <Element name='blog'> <Blog/> </Element>
      <Footer/>
    </div>
  )
}

export default App
