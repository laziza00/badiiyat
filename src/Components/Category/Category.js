import CategoryNav from './CategoryNav/CategoryNav'
import './Category.scss'
import Aux from '../../hoc/Aux'
import CategoryList from './CategoryList/CategoryList'
import Pagination from './Pagination/Pagination'
import React, { useState } from 'react'

function Category(props) {

    let categoryArr = ["All", "Jahon adabiyoti", "Diniy adabiyot", "O'zbek adabiyoti", "Biznes adabiyoti"]
    let typeArr =[' ', 'jahon', "Diniy", "o'zbek","biznes"]

    let objArr =  props.arr
    const [part, setPart] = useState(10)
    const [data, setData] = useState(objArr.slice(0, 10))
    let partLength = objArr.length /part;
    const newArrBtn = []

    for(let i = 1; i <= partLength; i++) newArrBtn.push(i)

    const handlerPagination =(e)=> {
        let start =(e.target.id -1) *part;
        let partsArr =objArr.slice(start, (part+start))
        setData(partsArr)
    }

  return (
        <Aux>
            <div className='category'>
                <div className='container'>
                    <div className='category__inner'>
                        <h2 className='category__title'>Asosiy kategoriyalar</h2>

                        <ul className='category__nav-list'>
                            {categoryArr.map((item, index)=> {
                                return  <CategoryNav
                                        key = {"d"+index}
                                        item = {item}
                                        obj= {props.obj}
                                        id = {typeArr[index]}
                                        arr={props.arr}
                                        setArr={props.setArr}
                                     />
                            })}
                         </ul>
                        <div className='category__list-box'>

                            <ul className='category__list'>
                                {props.arr.map((item, index)=> (
                                    <CategoryList
                                    item={item}
                                    key={"e"+index}
                                    id= {item.id}
                                            />
                                    ))}
                            </ul>
                        </div>
                        <div> 
                         <div className='pag'>
                                 {newArrBtn && newArrBtn.map((el, i)=> (
                                    <button className='pag__btn'
                                    onClick={handlerPagination}
                                    key ={i}
                                    id ={el}
                                     >
                                     {el}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
  )
}

export default Category