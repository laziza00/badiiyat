import React from 'react'
import './HeroList.scss'

function HeroList(props) {
  return (
    <ul className='hero__list' style={{transform: `translateX(-${props.sliderCount *1260-1260}px), transition: all .8s ease`}}>
        {props.sliderImg.map((item, i)=> (
            <li className='hero__item' key ={i+1}>
            
               <img className='hero__img' src={props.img} alt="img"/>
            </li>
        ))}

    </ul>

  )
}

export default HeroList