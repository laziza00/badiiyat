import React from 'react'
import avloniy from '../../assets/images/avloniy.png'
import book from '../../assets/images/book.png'
import './Category.scss'

function CategoryList(props) {
  return (
    <div className='category__list-box'>
        <ul className='category__list'>
            <li className='category__item'>
                <img className='category__item-img' src={props.item.img}/>
                <div className='category__item-inner'>
            
                <h3 className='category__item-title'>
                     {props.item.name}  {props.item.lastName}
                </h3>
                <p className='category__year'>
                {props.item.born}  {props.item.died}
                </p>
                <img className='category__item-book' src={book}/>
                </div>
            </li>
   
        </ul>
    </div>
  )
}

export default CategoryList