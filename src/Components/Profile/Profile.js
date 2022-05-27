import React, { useEffect } from "react";
import Aux from "../../hoc/Aux";
import './Profile.scss'
import imgUser from "../../assets/images/avloniy.png"
import bookImg from "../../assets/images/avloniy.png"
import Items from "../Category/Persons/Items";

function Profile(props){

    useEffect(()=> {
        let arr =props.saved;
        let topArr =[]

        props.saved.forEach(element => {
            if(arr != "")topArr.push(arr[0]);
            arr =arr.filter(el=> {
                return arr[0][0].bookId !=el[0].bookId
            })

        });
        props.setSaved(topArr)
    }, [])
    return(
        <>
            <Aux>
            <div className="container">
                <div className="users">
                
                    <div className="users__row">
                        <div className="users__rowIn">
                            <div className="users__imgbox">
                            <div className="users__relative">
                                <img className="users__img" src={imgUser} alt="user" />
                                <div className="users__iconStar">
                                    <i className='bx bxs-star'></i>
                                </div>
                            </div>
                            <h3 className="users__title">Oltin kitobxon</h3>
                            <p className="users__text">186 ta kitob o'qigan</p>
                            </div>
                            <div className="users__descBox">
                            <h2 className="users__name">{props.name} {props.lastName}</h2>
                            <p className="users__info"><span>Telefoni: </span>  {props.phone}</p>
                            <p className="users__info"><span>Email: </span> {props.email}</p>
                            <p className="users__info"><span>Bio: </span> Graphic designer and Developer</p>
                            </div>
                        </div>
                        <div className="users__bgImgbox">
                        </div>
                    </div>
            
                </div>
                <h2 className="books__title">Kitoblar</h2>
                <ul className="books__list" style={{listStyleType: "none"}}>
                    {props.saved.map((item, index)=> {
                        return <Items
                        key={"asdtf"+index}
                        bookImg={item[0].bookImg}
                        bookName={item[0].bookName}
                        bookRating={item[0].bookRating}
                        till={index}
                        id={item[0].bookId}
                        />
                    })}
                </ul>
                </div>
            </Aux>
        </>
    )
}

export default Profile;