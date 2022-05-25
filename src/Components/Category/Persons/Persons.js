import React from 'react'
import {useLocation} from 'react-router-dom'
import './Persons.scss';

function Persons(props) {
let location = useLocation()


  return (
    <div className='person'>
       <div className='container'>
     
        {props.obj.map((item, i)=> {
              if(item.userId == location.pathname.split("/").at(-1)) {
                return  <div className='person__inner' key={i}>
                        <div className='person__img-box'>
                            <img className='person__img' src={item.img}/>
                            <div className='person__img-inner__box'>
                              <div>
                                <p className='person__birth person__seen'>Tavallud sanasi</p>
                                <p className='person__date'>{item.dateOfBirth}</p>
                                <p className='person__country'>{item.country}</p>
                              </div>
                              <div>
                                <p className='person__birth person__seen'>Vafot etgan sanasi</p>
                                <p className='person__date'>{item.dateOfDied}</p>
                                <p className='person__country'>{item.country}</p>
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
                       {item.life}
                   </p>
                   <div className='person__inner-box'>
                        <h3 className='person__inner-title'>Asarlari</h3>
                        <a className='person__inner-link' href="/">Barchasini ko’rish</a>
                   </div>
                   <div className='person__img-inner'>
                     <ul className='person__list'>
                       {item.asarlari.map((books, j)=> {
                         return     <li className='person__item' key={j}>
                         <img className='person__inner-img' src={books.bookImg}/>
                         <h3 className='person__inner-name'>
                                {books.bookName}
                         </h3>
                         <div className='person__num-box'>
                               <i className='bx bxs-star' ></i>
                               <p className='person__num'>4.1</p>
                               <p className='person__seen'>{books.fikrlar} ta fikrlar</p>
                          
                         </div>
                    </li>
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