import React from 'react'
import { Link } from 'react-router-dom'
import './Persons.scss'


function Items(props) {
  return (
      <Link to={`/book/${props.id}`} className="person__main-link">
            <li className='person__item item-person' >
                <img className='person__inner-img img-items' src={props.bookImg}/>
                <h3 className='person__inner-name'>
                {props.bookName}
            </h3>
            <div className='person__num-box'>
                <i className='bx bxs-star' ></i>
                <p className='person__num'>{props.bookRating}</p>
                <p className='person__seen'>{props.bookPage} ta fikrlar</p>
            
            </div>
        </li>
</Link>
  )
}

export default Items