
import './App.css';
import './style.css';
import Complaint from './Component/Complaint';
import Home from './Component/Home';
import Login from './Component/Login';
import SignUp from './Component/SignUp';

import {Route, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to show the loading animation for demo purposes
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <>
   
 

            <ToastContainer position='bottom-center'/>
            {loading ? (
                <div className="abhi">
                <i>l</i>
                <i>o</i>
                <i>a</i>
                <i>d</i>
                <i>i</i>
                <i>n</i>
                <i>g</i>
                <i>.</i>
                <i>.</i>
                <i>.</i>
              </div>
              
              ) : (
                // Your main application content goes here
              <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/signup" element = {<SignUp />} />
            <Route path="/complaint" element = {<Complaint />} />
           
            
            </Routes>
            
        )}
    </>
  );
}

export default App;
