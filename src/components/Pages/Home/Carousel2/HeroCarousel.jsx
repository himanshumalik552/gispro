import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { hero } from '../../../../assets/hero/herodata'
const HeroCarousel = () => {
  return (
    <div>
      <Carousel>
        {hero.map((item) => {
          return (
            <div>
              <img src={item.imageUrl} alt={item.description} />
              <p className="legend">{item.title}</p>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default HeroCarousel