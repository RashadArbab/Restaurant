import React, {useState} from 'react'; 

import {Link} from 'react-router-dom';
 
function footer() {
    return (<div style={{backgroundColor: 'dimgray' , color: 'white'}}>
     
        <p> Hope you enjoyed my restaurant </p>
        <div className='navbarOptions'>
                <ul className='NavbarOptions' >
                    <Link to="/" style={{marginRight: '10px' , fontSize: '15px', color:'white'}}>
                    <li>
                        Seafood
                    </li>
                    </Link>

                    <Link to="/Canadian" style={{marginRight: '10px' , fontSize: '15px', color:'white'}}>
                    <li>
                        Canadian
                    </li>
                    </Link>
                    <Link to="/Chicken" style={{marginRight: '10px' , fontSize: '15px', color:'white'}} >
                    <li>
                        Chicken
                    </li>
                    </Link>
                    
                    
                </ul>

            </div>

        
        <p> Rashad Arbab </p>

    </div>);
}export default footer; 