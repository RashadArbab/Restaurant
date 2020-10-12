import React , {useEffect, useState} from 'react'; 
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css' ; 
import axios from 'axios' ; 
import Navbar from './navbar'; 
import Footer from './footer'; 

function Seafood() {

    const [items, setMeals]= useState([])

    useEffect(()=>{
        
         axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(response=>{
            console.log(response.data);
            setMeals(response.data.meals); 

        }).catch(error=>{
            console.log(error)
        });
        
    
},[]) 


const itemsList= items.map((object)=>{

    return <div className='col-md-4'>
            <img src={object.strMealThumb} style={{borderRadius: '10px'}} className='img-fluid'/> 
            <p>{object.strMeal}</p>
       
        </div>
       
    
})
    

    return (
        <div>
            
              <Navbar/>
            

            <div>
                <h1>Seafood</h1>
            </div>
        
            <div className='row'  style={{margin : '10px'}}> 
               
                    {itemsList}
               
            </div>

            <Footer/>
        </div>
    ); 

}export default Seafood; 