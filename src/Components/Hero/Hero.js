import React from 'react'
import Aux from '../../hoc/Aux'
import heroBg from '../../assets/images/hero-bg.png'
import Search from './Search'
import Btns from './Btns'
import './Hero.scss'


function Hero(props) {
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