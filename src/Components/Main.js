import React, { useEffect, useState } from 'react'
import './Main.scss'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Aux from '../hoc/Aux'
import Category from './Category/Category'
import obj from '../Object'

function Main() {

  let [arr, setArr]= useState([])

  useEffect(()=> {
    setArr(obj)
  }, [])


  return (
    <Aux>
        <Header/>
        <Hero 
        arr = {arr}
        setArr={setArr}
        />
        <Category 
           arr = {arr}
           setArr = {setArr}
           obj = {obj}
        />
    </Aux>
  )
}

export default Main