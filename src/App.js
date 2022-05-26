
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

function App() {
  return (
    <div className="App">
      
      <Layout>

      <Header />
      
      <Routes>
        <Route path="/" element={  <Main/>} />
        <Route path="nasr" element={ <Nasr/> } />
        <Route path="nazm" element={ <Nazm/> } />
        <Route path="maqolalar" element={ <Maqolalar/> } />
        <Route path="forum" element={ <Forum/> } />
        <Route path="Persons/:id" element={ <Persons obj ={obj}/> } />
        <Route path="book/:id" element={ <Book obj = {obj}/> } />
        <Route path="signin" element={ <SignIn/> } />
        <Route path="profile" element={ <Profile/> } />
    </Routes>
       
      </Layout>
    </div>
  );
}

export default App;
