import React from 'react'
import './Btns.scss'


function Btns(props) {
  return (
    <div>
        <div className='hero__btns'>
          {props.sliderImg.map((item, i)=> (
            <button className='hero__btn'key ={i+1} id={item.id} onClick={props.sliderFunc}></button>
          ))}
        </div>
    </div>
  )
}

export default Btns;