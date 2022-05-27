import React from 'react'
import './Settings.scss'
import { Link } from 'react-router-dom'

function Settings(props) {

let nameHandler =(e)=> {
    props.setName(e.target.value)
}
let lastNameHandler =(e)=> {
    props.setLastName(e.target.value)
}
let phoneHandler =(e)=> {
    props.setPhone(e.target.value)
}
let emailHandler =(e)=> {
    props.setEmail(e.target.value)
}


  return (
    <div className='setting'>
        <div className='container'>
            <div className='setting__inner'>
                <div className='setting__img-box'>
                    <img className='setting__img' src="https:/picsum.photos/id/11/175/175"/>
                    <button className='setting__img-btn'>
                    <i className='bx bx-camera'></i>
                    </button>
                </div>
                <div className='setting__info'>
                    <h2 className='setting__title'>My profile</h2>
                    <form className='setting__form'>
                        <div className='setting__form-box'>
                            <label className='setting__label'>First Name</label>
                            <input className='setting__input' type="text" required value={props.name} onChange={nameHandler}/>
                            <p className='setting__text'>Please enter your first name.</p>
                        </div>
                        <div className='setting__form-box'>
                            <label className='setting__label'>Last Name</label>
                            <input className='setting__input' type="text"  value={props.lastName} onChange={lastNameHandler}/>
                            <p className='setting__text'>Please enter your last name.</p>
                        </div>
                        <div className='setting__form-eamil'>
                            <div>
                            <label className='setting__label' type="number">Phone</label>
                            <input className='setting__input' type="text" value={props.phone} onChange={phoneHandler}/>
                            <p className='setting__text'>Please enter your  phone number.</p>
                            </div>
                            <div>
                            <label className='setting__label' type="email">Email</label>
                            <input className='setting__input' type="text" value={props.email} onChange={emailHandler} />
                            <p className='setting__text'>Please enter your email address.</p>
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "flex-end", padding: "0 85px 0 0"}}>
                            <Link to={"/profile"} >
                            <button className='setting__btn'> Save Changes</button>
                            </Link>
                        </div>
               
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings