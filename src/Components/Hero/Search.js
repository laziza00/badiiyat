import React from 'react'
import './Search.scss'
import obj from '../../Object'

function Search(props) {

  let newArr =[]
  const searchHandler =(e)=> {
   console.log(e.target.value);

    obj.forEach((item, i)=> {
      if(item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) || item.lastName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())  ){
        newArr.push(item)
      }

    })
    props.setArr(newArr)


  }
  return (
    <div>
            <div className='search'>
                <h2 className='search__title'>Qidirish</h2>
                <div className='search__box'>
                    <input className='search__input'
                    type="text"
                    placeholder='Adiblar, kitoblar, audiolar, maqolalar...'
                    onChange={searchHandler}
                     />
                    <button className='search__btn'>
                    <i className='bx bx-search'></i>Izlash
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Search;