import './App.scss';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import {Route,Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Admin from './components/Users/Admin';
import Customer from './components/Users/Customer';
import ShowData from './components/Auth/ShowData';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes> 

         <Route index element = {<Home/>}/>
         <Route path='/home'  element = {<Home/>}/>
         <Route path='/login' element = {<Login/>}/>
         <Route path='/signup' element = {<SignUp/>}/>
         <Route path='/users/admin' element = {<Admin/>}/>
         <Route path='/users/customer' element = {<Customer/>}/>
         <Route path='/showData' element = {<ShowData/>}/>

         <Route path='*' element = {<div> <h1>Error 404 ! Not Found</h1></div>}/>

       </Routes>
    </div>
  );
}

export default App;
