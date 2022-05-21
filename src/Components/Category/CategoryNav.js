import React from 'react'
import './Category.scss'

function CategoryNav(props) {

// console.log(props.type);

const filteredByName =(e)=> {
    console.log("bye");
    if(e.target.id==="temuriy") {
        console.log("temuriy");
        props.setArr(props.obj.filter(item => {
            return item.id === e.target.id
        }))
    }
    if(e.target.id ==="jadid") {
        console.log("jadid");
        props.setArr(props.obj.filter(item=> {
            return item.id === e.target.id
        }))
    }
    if(e.target.id === "sovet") {
        console.log("sovet");
        props.setArr(props.obj.filter(item => {
            return item.id === e.target.id
        }))
    }
    if(e.target.id ==="mustaqillik") {
        console.log("mustaqillik");
        props.setArr(props.obj.filter(item => {
            return item.id === e.target.id
        }))
    }

}    
  return (
    <div className='category__nav'>
        <ul className='category__nav-list'>
            <button className='category__nav-item' 

            onClick={filteredByName} 
            id={props.id}>
            {props.item}
            </button>
        </ul>
    </div>
  )
}

export default CategoryNav