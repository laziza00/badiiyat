import React from 'react'
import './Book.scss'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Book(props) {
let location = useLocation()

  return (
    <div className='book'>
      <div className='container'>
              
            { props.obj.map((item, i)=> {
                <h2>Heloooo</h2>
                return item.bookObj.map((book, j)=> {
                    if(book.bookId == +location.pathname.split("/").at(-1)){
                        return (
                         <div key={i}>
                           <div className='book__inner' >
                            <div className='book__img-box'>
                                <img className='book__img' src={book.bookImg}/>
                            </div>
                            <div className='book__info'>
                                <h2 className='book__title'>{book.bookName}</h2>
                               <Link to={`/Persons/${item.id}`} className="book__main-link">
                                   <p className='book__author'>{item.name}{item.lastName}</p>
                               </Link> 
                               <ul className='book__list'>
                                   <li className='book__item' key={j}>
                                       <p className='book__item-text'>Sahifalar soni:</p>
                                       <p className='book__item-num'>{book.bookPage}</p>
                                   </li>
                                   <li className='book__item'>
                                       <p className='book__item-text'>Chop etilgan:</p>
                                       <p className='book__item-num'>{book.published}</p>
                                   </li>
                                   <li className='book__item'>
                                       <p className='book__item-text'>Janri:</p>
                                       <p className='book__item-num'>{book.bookGenre}</p>
                                   </li>
                                   <li className='book__item'>
                                       <p className='book__item-text'>Nashriyot</p>
                                       <p className='book__item-num'>{book.nashriyot}</p>
                                   </li>
                               </ul>
                               <div className='book__mal-box'>
                                   <p className='book__mal book__author'>To’liq ma’lumot</p>
                                   <i className='bx bx-down-arrow-alt'></i>
                                   <div className='book__line'></div>
                               </div>
                               <p className='book__text-info'>
                                    {book.bookInfo}
                               </p>
                               <p className='book__form book__author'>Mavjud formatlar</p>
                               <div className='book__form-box'>
                               <ul className='book__form-list'>
                                   <li className='book__form-item'>
                                        <i className='bx bxs-card'></i>
                                        <p className='book__form-title'>Qog’oz kitob</p>
                                        <p className='book__form-price'>{book.bookPrice}</p>
                                   </li>
                                   <li className='book__form-item'>
                                        <i className='bx bxs-card'></i>
                                        <p className='book__form-title'>Audiokitob</p>
                                        <p className='book__form-price'>{book.audioTime}</p>
                                   </li>
                                   <li className='book__form-item'>
                                        <i className='bx bxs-card'></i>
                                        <p className='book__form-title'>Elektron</p>
                                        <p className='book__form-price'>{book.electron}</p>
                                   </li>
                               </ul>
                               <button className='book__form-btn'>Javonga qo’shish </button>
                               </div>
                            </div>
                        </div>
                        <div>
                            <ul className='book__nav-list'>
                                <li className='book__nav-item'>
                                   Muallif haqida
                                </li>
                                <li className='book__nav-item'>
                                    Kitobdan iqtiboslar
                                </li>
                                <li className='book__nav-item'>
                                    Kitobxonlar taqrizi
                                </li>
                            </ul>
                            <div className='book__inner-box'>
                                <div className='book__quotes'>
                                        <i className='bx bxs-quote-alt-left quotes'></i>
                                        <p className='book__inner-text'>      
                                        {book.bookInfo}
                                        </p>
                                        <div className='book__share'>
                                            <i className='bx bxs-heart'></i>
                                            <i className='bx bxs-share-alt'></i>
                                        </div>
                                </div>
                                <div className='book__quotes'>
                                        <i className='bx bxs-quote-alt-left quotes'></i>
                                        <p className='book__inner-text'>      
                                        {book.bookInfoTwo}
                                        </p>
                                </div>
                            </div>
                            <div className='book__link-box'>
                                <p className='book__link'>Sizga yoqishi mumkin</p>
                                <p className='book__other-link'>Barchasini ko’rish</p>
                            </div>
                            <div>
                                <ul className='book__book-list'>
                                    <li className='book__book-item'>
                                        <img className='book__book-img' src=""/>
                                            <h3 className='book__book-title'>Dunyoning ishlari</h3>
                                            <div className='book__book-inner'>
                                                <i className='bx bxs-star'></i>
                                                <p className='book__book-num'>{book.bookRating} • 3400 ta fikrlar</p>
                                            </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                                 )
                             }
                        })
                    })
            }
    </div>
</div>
  )
}

export default Book