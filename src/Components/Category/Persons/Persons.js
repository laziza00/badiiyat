import React from 'react'
import {useLocation} from 'react-router-dom'
import './Persons.scss';
import PersonItem from './PersonItem';

function Persons(props) {
let location = useLocation()


  return (
    <div className='person'>
       <div className='container'>
     
        {props.obj.map((item, i)=> {
              if(item.id == location.pathname.split("/").at(-1)) {
                return  <div className='person__inner' key={i}>
                        <div className='person__img-box'>
                            <img className='person__img' src={item.img}/>
                            <div className='person__img-inner__box'>
                              <div>
                                <p className='person__birth person__seen'>Tavallud sanasi</p>
                                <p className='person__date'>{item.born} {item.bornDate} {item.bornMonth}</p>
                                <p className='person__country'>{item.location}</p>
                              </div>
                              <div>
                                <p className='person__birth person__seen'>Vafot etgan sanasi</p>
                                <p className='person__date'>{item.died} {item.diedDate} {item.diedMonth}</p>
                                <p className='person__country'>{item.location}</p>
                              </div>
                            </div>
                        </div>
                 <div className='person__info'>
                   <h2 className='person__title'>{item.name} {item.lastName}</h2>
                   <p className='person__desc'>
                         {item.desc}
                   </p>
                   <div className='person__bookmark-box'>
                        <i className='bx bxs-bookmark-star'></i>
                        <p className='person__genre'>Ijodi</p>
                   </div>
                   <p className='person__life'>
                       {item.jobs}
                   </p>
                   <div className='person__inner-box'>
                        <h3 className='person__inner-title'>Asarlari</h3>
                        <a className='person__inner-link' href="/">Barchasini ko’rish</a>
                   </div>
                   <div className='person__img-inner'>
                     <ul className='person__list'>
                       {item.bookObj.map((books, j)=> {
                         return  <PersonItem
                               key ={"asdf"+j}
                               bookImg ={books.bookImg}
                               bookName ={books.bookName}
                               bookRating ={books.bookRating}
                               bookPage ={books.bookPage}
                               id={books.bookId}
                               index ={j}
                         />
           
                       })}
                
                     </ul>
                   </div>
            </div>   
        </div> 
              }
              })}
        </div>
    </div>
  )
}

export default Persons;