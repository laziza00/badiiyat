import React from 'react'
import './Btns.scss'


function Btns(props) {
  return (
        <div className='hero__btns'>
          {props.sliderImg.map((item, i)=> (
            <button className={`hero__btn ${item.act ? "hero__btn-act" : ""}`} key ={i+1} id={item.id} onClick={props.sliderFunc}></button>
          ))}
        </div>

  )
}

export default Btns;