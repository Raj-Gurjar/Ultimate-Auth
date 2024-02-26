import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import Home from './components/Home/Home';
import Login from './components/Logs/Login';
import SignUp from './components/Logs/SignUp';
import {Route,Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes> 
         <Route to='home'  element = {<Home/>}/>
         <Route to='login' element = {<Login/>}/>
         <Route to='signup' element = {<SignUp/>}/>
         <Route to='dashboard' element = {<DashBoard/>}/>
       </Routes>
    </div>
  );
}

export default App;
