import React , {useEffect, useState} from 'react'; 
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css' ; 
import axios from 'axios' ; 
import Navbar from './navbar'; 
import Footer from './footer'; 

function Canadian() {
    //one const 
    //one map 


    const[items, setItems] = useState([]) ; 
    
    useEffect ( ()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
        .then(response=>{
            console.log(response.data) ;
            setItems(response.data.meals)
        })
        .catch(error=>{
            console.log(error); 
        })
    },[]);

    const itemsList= items.map((object)=>{
        return <div className='col-md-4'>
            <img src={object.strMealThumb} style={{borderRadius : '10px'}} className="img-fluid" />
            <p>{object.strMeal}</p>

        </div>
    }); 

    return <div>
        <Navbar/>
        <div className='row' style={{margin:'10px'}}>
        {itemsList}
        </div>

        <Footer/> 
        
    </div>

}export default Canadian; 