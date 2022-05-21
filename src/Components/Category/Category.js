import React from 'react'
import CategoryNav from './CategoryNav'
import './Category.scss'
import Aux from '../../hoc/Aux'
import CategoryList from './CategoryList'

function Category(props) {

    let categoryArr = ["Temuriylar davri", "Jadid adabiyoti", "Sovet davri", "Mustaqillik davri"]

    let typeArr =['temuriy', "jadid", "sovet", "mustaqillik"]

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
                    
                        <ul className='category__list'>
                        {props.arr.map((item, index)=> (
                            <CategoryList
                            item={item}
                            key={"e"+index}
                                    />
                            ))}
                       </ul>
                    </div>
                </div>
            </div>
        </Aux>
  )
}

export default Category