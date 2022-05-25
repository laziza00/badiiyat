import React, { useState, useEffect } from 'react'
// import React from 'react'
import Aux from '../../hoc/Aux'
import heroBg from '../../assets/images/hero-bg.png'
import Search from './Search/Search'
import Btns from './Btns/Btns'
import './Hero.scss'




function Hero(props) {


  const [sliderImg, setSliderImg] = useState([
    {
      id: 1,
      img: heroBg,
      act: true,
    },
    {
      id: 2,
      img: heroBg,
      act: false,
    },
    {
      id: 3,
      img: heroBg,
      act: false,
    },
    {
      id: 4,
      img: heroBg,
      act: false,
    },
  ])


  return (
    <div>
        <Aux>
          <div className='hero'>
            <div className='container'>
              <div className='hero__inner'>
                <ul className='hero__list'>
                  <li className='hero__item'>
                    <h2 className='hero__title'>
                        Temuriylar 
                        davri 
                        adabiyoti
                      </h2>
                  <Btns></Btns>
                  </li>
             
                </ul>
        
              </div>
              <div className='hero__search'>
              <Search
                obj={props.obj}
                arr ={props.arr}
                setArr ={props.setArr}
                
              />
              </div>
            </div>
          </div>
        </Aux>
    </div>
  )
}

export default Hero