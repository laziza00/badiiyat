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
                  
                        <div className="dropdown header__next-box'">
                            <img  src={heroPerson} className='header__next-img'/>
                            <button className="btn header__btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className='bx bx-chevron-down'></i>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                            </ul>
                            </div>
                 
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header