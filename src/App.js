import  React, { useEffect, useState }  from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import {routes} from "../../note-app/src/global/routes/route"
import HomePage from './pages/HomePage';
// import { useNavigate } from "react-router-dom";


function App() {

  const [user,setUser] = useState("")
  // let navigate = useNavigate();

  useEffect(() => {
    let auth = localStorage.getItem("auth")
    let redirect = JSON.parse(auth);
    if(redirect) {
          setUser(redirect);      
        // navigate(routes.home)
    } 
  })





  return (
    <>
   <BrowserRouter>

   <Routes>
   <Route path = {routes.signIn} element = {<SigninPage/>} />
   <Route path = {routes.signUp} element = {<SignupPage/>} />
   <Route path = {routes.home} element = {<HomePage/>} />
   </Routes>

   </BrowserRouter>

    </>

  );
}

export default App;
