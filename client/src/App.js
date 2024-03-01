import './App.scss';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import {Route,Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import AdminDashBoard from './components/Users/Admin/AdminDashBoard';
import CustomerDashBoard from './components/Users/Customer/CustomerDashBoard';

import UserProfile from './components/Users/UserProfile';


function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes> 

         <Route index element = {<Home/>}/>
         <Route path='/home'  element = {<Home/>}/>
         <Route path='/login' element = {<Login/>}/>
         <Route path='/signup' element = {<SignUp/>}/>
         <Route path='/users/admin/dashboard' element = {<AdminDashBoard/>}/>
         <Route path='/users/customer/dashboard' element = {<CustomerDashBoard/>}/>
         <Route path='/users/profile' element = {<UserProfile/>}/>

         <Route path='*' element = {<div> <h1>Error 404 ! Not Found</h1></div>}/>

       </Routes>
    </div>
  );
}

export default App;
