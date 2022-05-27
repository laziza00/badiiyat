import React from 'react'
import '../Category.scss';

function CategoryNav(props) {


const filteredByName =(e)=> {
    // console.log(e.target.id);
    
    if(e.target.id ===" ") {
        props.setArr(props.obj)
       
    }
    if(e.target.id === "jahon") {
    
        props.setArr(props.obj.filter(item => {
            return item.genre === e.target.id
        }))
    }
    if(e.target.id ==="o'zbek") {
        props.setArr(props.obj.filter(item=> {
            return (item.genre === e.target.id )
        }))
    }
    if(e.target.id === "Diniy") {
        props.setArr(props.obj.filter(item => {
            return item.genre === e.target.id
        }))
    }
    if(e.target.id === "biznes") {
        props.setArr(props.obj.filter(item => {
            return item.genre === e.target.id
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