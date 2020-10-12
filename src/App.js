import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Redirect,  } from 'react-router-dom'
import Seafood from './Seafood'; 
import Canadian from './Canadian'; 
import axios from 'axios'; 
import Chicken from './Chicken';
function App() {

 


  return (
    <div className="App">
      <BrowserRouter>
      
      <Route path="/" component={Seafood} exact/>
      <Route path="/canadian" component={Canadian} exact/>
      <Route path="/chicken" component={Chicken} exact/> 

      </BrowserRouter>

    

     
    </div>
  );
}

export default App;
