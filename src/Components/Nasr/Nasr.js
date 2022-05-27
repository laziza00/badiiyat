import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import obj from '../../anotherObject'
import PersonItem from '../Category/Persons/PersonItem'


function Nasr() {

  const [newBookArr, setBookArr]= useState([])

  useEffect(()=> {
    setBookArr(obj)
  }, [])
  return (
    <div className='App'>
       <Hero /> 
       <PersonItem  />

    </div>
  )
}

export default Nasr