import React from 'react';
import book from '../../../assets/images/book.png';
import '../Category.scss';
import { Link } from 'react-router-dom';

function CategoryList(props) {

  return (
    
        <Link className='category__item' to={`Persons/${props.id}`} id={props.id}>
                <div className='category__img-box'>
                      <img className='category__item-img' src={props.img}/>
                </div>
                <div className='category__item-inner'>
            
                      <h3 className='category__item-title'>
                          {props.name}  {props.lastName}
                      </h3>
                      <p className='category__year'>
                      {props.born}  {props.died}
                      </p>
                    
                        <ul style={{display:"flex", justifyContent: "space-between", listStyleType: "none", padding: 0}}>
                          <li style={{display:"flex", alignItems:"center"}}>
                                <i className='bx bxs-book-alt'></i>
                                <p className='category__audio'> {props.books}</p>
                          </li>
                          <li style={{display:"flex"}}>
                              <i className='bx bx-headphone' ></i>
                                <p className='category__audio'>{props.audio}</p>
                          </li>
                        </ul>
                </div>
            </Link>
  )
}

export default CategoryList;