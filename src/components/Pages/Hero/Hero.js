import React from 'react'
import GisVideo from '../../../assets/gismapvideo.mp4'
import './Hero.scss'


const Hero = () => {
  return (
    <div>
      <video className='videoTag' autoPlay loop muted>
        <source src={GisVideo} type='video/mp4' />
      </video>
      <header class="viewport-header">
        <h1 id='heroh1'>
          Explore
          <span>GISPRO</span>
        </h1>
      </header>
    </div>
  )
}

export default Hero