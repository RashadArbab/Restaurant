import React, {useState} from 'react'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import {BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import './navbar.css';
function navbar() {

    return ( <div style={{backgroundColor : 'dimgray'}}> 
        <p style={{color: 'white', fontWeight:'500', fontSize:'50px'}}>Rashad's React-ive Rest-aurant</p>
            <div >
                <ul className='NavbarOptions' >
                    <Link to="/" style={{marginRight: '10px' , fontSize: '25px', color:'white'}}>
                    <li>
                        Seafood
                    </li>
                    </Link>

                    <Link to="/Canadian" style={{marginRight: '10px' , fontSize: '25px', color:'white'}}>
                    <li>
                        Canadian
                    </li>
                    </Link>
                    <Link to="/Chicken" style={{marginRight: '10px' , fontSize: '25px', color:'white'}} >
                    <li>
                        Chicken
                    </li>
                    </Link>
                    
                    
                </ul>

            </div>

        </div>
        
       
    );


} export default navbar; 