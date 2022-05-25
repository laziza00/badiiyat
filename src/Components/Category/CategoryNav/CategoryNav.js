import React from 'react'
import '../Category.scss';

function CategoryNav(props) {


const filteredByName =(e)=> {
    
    if(e.target.id ===" ") {
        props.setArr(props.obj)
    }
    if(e.target.id === "temuriy") {
    
        props.setArr(props.obj.filter(item => {
            return item.id === e.target.id
        }))
    }
    if(e.target.id === "jadid") {
        props.setArr(props.obj.filter(item=> {
            return item.id === e.target.id
        }))
    }
    if(e.target.id === "sovet") {
        props.setArr(props.obj.filter(item => {
            return item.id === e.target.id
        }))
    }
    if(e.target.id === "mustaqillik") {
        props.setArr(props.obj.filter(item => {
            return item.id === e.target.id
        }))
    }

}    
  return (
    <div className='category__nav'>
        <ul className='category__nav-list'>
            <button className='category__nav-item' 
            onClick = {filteredByName} 
            id = {props.id}>
            {props.item}
            </button>
        </ul>
    </div>
  )
}

export default CategoryNav