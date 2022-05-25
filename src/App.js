
import './App.css';
import Main from './Components/Main'
import Layout from './Components/Layout/Layout'
import { Routes, Route } from "react-router-dom"
import Nasr from './Components/Nasr'
import Nazm from './Components/Nazm'
import Maqolalar from './Components/Maqolalar'
import Forum from './Components/Forum'
import Header from './Components/Header/Header';
import Persons from './Components/Category/Persons/Persons'
import obj from './Object'

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
    </Routes>
       
      </Layout>
    </div>
  );
}

export default App;
