import React from 'react';
import book from '../../../assets/images/book.png';
import '../Category.scss';
import { Link } from 'react-router-dom';

function CategoryList(props) {

  return (
    
            <Link className='category__item' to={`Persons/${props.item.id}`} id={props.item.id}>
                <div className='category__img-box'>
                      <img className='category__item-img' src={props.item.img}/>
                </div>
                <div className='category__item-inner'>
            
                      <h3 className='category__item-title'>
                          {props.item.name}  {props.item.lastName}
                      </h3>
                      <p className='category__year'>
                      {props.item.born}  {props.item.died}
                      </p>
                      <img className='category__item-book' src={book}/>
                </div>
            </Link>
 
  )
}

export default CategoryList;