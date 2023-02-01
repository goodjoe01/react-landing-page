import React, {lazy, Suspense} from 'react'
import { Footer, Blog, Features, WhatGPT3, Header} from './containers'
import { Cta, Brand, Navbar} from './components'
import { Element  } from 'react-scroll'
import './App.css'

const Possibility = lazy(()=>import('./containers/possibility/Possibility'))
 
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
      <Suspense>
        <Element name='possibility'> <Possibility/> </Element>
      </Suspense>
      <Element name='cta'> <Cta/> </Element>
      <Element name='blog'> <Blog/> </Element>
      <Footer/>
    </div>
  )
}

export default App
