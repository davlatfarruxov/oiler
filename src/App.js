import React from 'react';
import {Footer, Blog, Possiblity, Features, WhatGPT3, Header} from './containers';
import {CTA, Brand, Navbar } from './components'
import './App.css'
import ai from '../src/assets/small.mp4'

const App = () => 
{
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <video
            autoPlay
            
            loop
          
          >
            <source
              src={ai}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
      {/* <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possiblity/>
      <CTA/>
      <Blog/>
      <Footer/> */}

    </div>
  )
}

export default App
