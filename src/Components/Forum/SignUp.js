import React, { useState } from 'react'
import './Forum.scss'
import forumImg from '../../assets/images/forumUp.svg'
import { Link } from 'react-router-dom'

function Forum(props) {
  let name ="";
  let lastName="";
  let phone ="";
  let email="";
  let password=""
 

  let [inputName, setInputName]=useState()
  let [inputLastName, setInputLastName]=useState()
  let [inputPhone, setInputPhone]=useState()
  let [inputEmail, setInputEmail]=useState()
  let [inputPassword, setInputPassword]=useState()
  let [temp, setTemp]=useState(true)



 let checkName =(e)=> {
      name = e.target.value

      if(name.match(/[a-z]/) !==null && name.match(/[!@#$%^&*]/)===null && name!= "" && name.match(/[0-9]/) ===null && name.length>=3) {
          setInputName(true)
      }else {
        setInputName(false)
      }
  }
 let checkLastName=(e)=> {
    lastName = e.target.value

    if(lastName.match(/[a-z]/) !==null && lastName.match(/[!@#$%^&*]/) ===null && lastName != "" && lastName.match(/[0-9]/)===null && lastName.length>=3 ) {
      setInputLastName(true)
    }else {
      setInputLastName(false)
    }
  }
 let checkPhone=(e)=> {
    phone = e.target.value

    if(phone.match(/[a-z]/) === null && phone.match(/[0-9]/) !== null && phone.match(/[@#$%^&*]/) === null && phone.length >= 8){
      setInputPhone(true);
    }else{
      setInputPhone(false); 
    }
  }

  let checkEmail = (e) => {
    email = e.target.value;

    if(email.match(/[a-z]/) !== null && email.match(/[0-9]/) !== null && email.match(/[@]/) !== null && email.length >= 8){
      setInputEmail(true)
    }else{
      setInputEmail(false) 
    }
  }
let checkPassword =(e)=> {
  let password = e.target.value

  if(password.match(/[a-z]/) !== null && password.match(/[0-9]/) !== null && password.match(/[@#$%^&*]/) === null && password.length <= 8){
    setInputPassword(true);
  }else{
    setInputPassword(false); 
  }
  if(inputName == true && inputLastName == true && inputPhone == true  && inputEmail == true && inputPassword == true){
    setTemp(true);
  } else{
    setTemp(false);
  }
}

let submitHandler = () => {
  props.setInputName(name);
  props.setInputLastName(lastName);
  props.setInputPhone(phone);
  props.setInputEmail(email);
  props.setInputPassword(password)
}



  return (
    <div className='forum'>
        <div className='forum__inner'>
            <div className='forum__img-box'>
                <img src={forumImg} className="forum__img"/>
            </div>
            <div className='forum__info'>
                <h2 className='forum__title'>Sign up</h2>
                <p className='forum__link-text'>Already have an account?
                <Link className='forum__link' to={'/signin'}>Sign in</Link>
                </p>
                <form className='forum__form' onSubmit={submitHandler}>
                      <input className="forum__input" 
                      type="text" 
                      style={{border: inputName? "1px solid green": "1px solid red"}}
                      placeholder='First name'
                      id="name" 
                      onChange={checkName}
                      required />
                      <input className="forum__input" 
                      type="text" 
                      placeholder='Last name' 
                      id="lastName"
                      onChange={checkLastName}
                      style ={{border: inputLastName? "1px solid green": "1px solid red"}}
                      required/>
                      <input className='forum__input' 
                      type="text" 
                      placeholder='Phone' 
                      onChange={checkPhone}
                      style ={{border: inputPhone? "1px solid green": "1px solid red"}}
                      required/>
                      <input className='forum__input' 
                      type="email" 
                      placeholder='Email' 
                      onChange={checkEmail}
                      style ={{border: inputEmail? "1px solid green": "1px solid red"}}
                      required/>
                      <input className='forum__input' 
                      type="text" 
                      placeholder='Password' 
                      onChange={checkPassword}
                      style ={{border: inputPassword? "1px solid green": "1px solid red"}}
                      required/>
                       <Link to={'/profile'} style={{textDecoration: "none"}}> 
                            <button className='forum__btn'
                             type='submit' 
                             disabled={temp}>Next step</button>   
                      </Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Forum