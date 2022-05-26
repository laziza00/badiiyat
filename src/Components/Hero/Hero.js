import React, { useState, useEffect } from 'react'
// import React from 'react'
import Aux from '../../hoc/Aux'
import heroBg from '../../assets/images/hero-bg.png'
import Search from './Search/Search'
import Btns from './Btns/Btns'
import './Hero.scss'
import HeroList from './HeroList/HeroList'




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
const [sliderCount, setsliderCount] = useState(1)
const [time, setTime]= useState(3000)
const [id, setId]= useState(1)


const sliderFunc =(e)=> {
  let id = Math.floor(e.target.id)
  setId(Math.floor(e.target.id))
  setTime(3000)

  setSliderImg(
    sliderImg.map((item, i)=> {
      if(id == item.id){
        setsliderCount(item.id)
        return {
          ...item,
          act: true,
        }
      }
      return {
        ...item,
        act: false,
      }
    })
  )
}
  return (
    <div>
        <Aux>
          <div className='hero'>
            <div className='container'>
              <div className='hero__inner'>
       
              <Btns sliderImg={sliderImg} sliderFunc={sliderFunc}/>
              <div>
              {/* <h1 className='hero__title'>Temuriylar 
                  davri 
                  adabiyoti
                </h1> */}
              <HeroList sliderImg={sliderImg} img={heroBg} sliderCount={sliderCount}/>
              </div>
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