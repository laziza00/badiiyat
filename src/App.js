
import './App.css';
import Main from './Components/Main'
import Layout from './Components/Layout/Layout'
import { Routes, Route } from "react-router-dom"
import Nasr from './Components/Nasr/Nasr'
import Nazm from './Components/Nazm/Nazm'
import Maqolalar from './Components/Maqolalar/Maqolalar'
import Forum from './Components/Forum/SignUp'
import Header from './Components/Header/Header';
import Persons from './Components/Category/Persons/Persons'
import obj from './anotherObject'
import Book from './Components/Category/Book/Book'
import SignIn from './Components/Forum/SignIn';
import Profile from './Components/Profile/Profile'
import React, {  useState } from 'react'
import Settings from './Components/Settings/Settings';



function App() {

  let [saved, setSaved]=useState([])
  let [name, setName] =useState("")
  let [lastName, setLastName]=useState("")
  let [phone, setPhone] =useState("")
  let [email, setEmail] =useState("")
  let [password, setPassword] =useState("")
  let [isTrue, setIsTrue] =useState(true)

  return (
    <div className="App">
      
      <Layout>
      <Header />
      
      <Routes>
        <Route path="/" element={  <Main/>} />
        <Route path="nasr" element={ <Nasr/> } />
        <Route path="nazm" element={ <Nazm/> } />
        <Route path="maqolalar" element={ <Maqolalar/> } />
        <Route path="Persons/:id" element={ <Persons obj ={obj}/> } />
        <Route path="book/:id" element={ <Book 
        saved={saved}
        setSaved={setSaved}
        /> } />
        <Route path="forum" 
        element={ <Forum
           name ={name}
           setName= {setName}
           lastName ={lastName}
           setLastName ={setLastName}
           phone ={phone}
           setPhone ={setPhone}
           email ={email}
           setEmail ={setEmail}
           password ={password}
           setPassword ={setPassword}
           isTrue ={isTrue}
           setIsTrue ={setIsTrue}
        /> } />
        <Route path="signin" element={ <SignIn/> } />
        <Route path="profile" 
        element={ <Profile
          saved={saved}
          setSaved={setSaved}
          name ={name}
          setName= {setName}
          lastName ={lastName}
          setLastName ={setLastName}
          phone ={phone}
          setPhone ={setPhone}
          email ={email}
          setEmail ={setEmail}
          setPassword ={setPassword}
          password ={password}
          isTrue ={isTrue}
          setIsTrue ={setIsTrue}
        /> } />

        <Route path="settings" 
          element={ <Settings
            name ={name}
            setName= {setName}
            lastName ={lastName}
            setLastName ={setLastName}
            phone ={phone}
            setPhone ={setPhone}
            email ={email}
            setEmail ={setEmail}
            setPassword ={setPassword}
            password ={password}
        /> } />
    </Routes>
       
      </Layout>
    </div>
  );
}

export default App;
