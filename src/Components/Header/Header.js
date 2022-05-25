import React from 'react'
import { Link } from "react-router-dom";
import './Header.scss'
import logo from '../../assets/images/Badiiyat.svg'
import heroPerson from '../../assets/images/hero-person.png'



function Header() {
  return (
    <div>
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <div className='header__logo-box'>
                        <a  href="#" className='header__logo-link'>
                            <img src={logo} className='header__logo'/>
                        </a>
                    </div>
                    <nav className='header__nav'>
                        <ul className='header__list'>
                            <li className='header__item'>
                                <Link className='header__link'   to="/">
                                    Bosh sahifa
                                </Link>
                            </li>
                            <li className='header__item'>
                                <Link className='header__link' to="/nasr">
                                   Nasr
                                </Link>
                            </li>
                            <li className='header__item'>
                                <Link className='header__link' to="/nazm">
                                Nazm
                                </Link>
                            </li>
                            <li className='header__item'>
                                <Link className='header__link' to="/maqolalar">
                                Maqolalar
                                </Link>
                            </li>
                            <li className='header__item'>
                                <Link className='header__link' to="/forum">
                                Forum
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='header__next-box'>
                        <img  src={heroPerson} className='header__next-img'/>
                        <button className='header__btn btn'>
                        <i className='bx bx-chevron-down'></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header